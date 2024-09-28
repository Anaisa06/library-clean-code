import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schema/book.schema';
import { Model } from 'mongoose';
import { BooksQueryDto } from './dto/query.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) { }

  async create(createBookDto: CreateBookDto): Promise<Book> {

    const createdBook = new this.bookModel(createBookDto);
    return await createdBook.save();

  }

  async findAll(query: BooksQueryDto): Promise<Book[]> {
    const books: Book[] = await this.bookModel.find({ ...query, isDeleted: false });
    if (!books.length) throw new NotFoundException('No books were found');
    return books;
  }

  async findOne(id: string): Promise<Book> {
    const book: Book = await this.bookModel.findById(id);
    if (!book) throw new NotFoundException(`Book with id ${id} was not found`);
    return book;
  }

  async update(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    const updatedBook = await this.bookModel.findByIdAndUpdate(id, { $set: updateBookDto }, { new: true });
    if (!updatedBook) throw new NotFoundException(`Book with id ${id} was not found`);
    return updatedBook;
  }

  async remove(id: string): Promise<Book> {
    const deletedBook = await this.bookModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    if (!deletedBook) throw new NotFoundException(`Book with id ${id} was not found`);
    return deletedBook;
  }
}
