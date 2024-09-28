import { Controller, Get, Post, Body, Patch, Param, Delete, Query, } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { BooksQueryDto } from './dto/query.dto';
import { ValidateObjectIdPipe } from 'src/common/pipes/objectId.pipe';
import { BooksReponseDto } from './dto/response.dto';
import { ApiDocCreateBook, ApiDocDeleteBook, ApiDocGetBooks, ApiDocGetOneBook, ApiDocUpdateBook } from './decorators/swagger.decorators';

@ApiTags('Books')
@ApiExtraModels(BooksReponseDto)
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @ApiDocCreateBook(BooksReponseDto)
  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @ApiDocGetBooks(BooksReponseDto)
  @Get()
  findAll(@Query() query: BooksQueryDto) {
    return this.booksService.findAll(query);
  }

  @ApiDocGetOneBook(BooksReponseDto)
  @Get(':id')
  findOne(@Param('id', ValidateObjectIdPipe) id: string) {
    return this.booksService.findOne(id);
  }

  @ApiDocDeleteBook(BooksReponseDto)
  @Patch('/delete/:id')
  remove(@Param('id', ValidateObjectIdPipe) id: string) {
    return this.booksService.remove(id);
  }

  @ApiDocUpdateBook(BooksReponseDto)
  @Patch(':id')
  update(@Param('id', ValidateObjectIdPipe) id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(id, updateBookDto);
  }

}
