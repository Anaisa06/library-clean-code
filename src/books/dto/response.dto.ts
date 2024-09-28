import { ApiProperty } from "@nestjs/swagger";
import { Genre } from "src/common/enums/genre.enum";

export class BooksReponseDto {
    @ApiProperty({ name: '_id', description: 'The id of the book', example: '66f8267301e2a315e5e09c87'})
    id: String;

    @ApiProperty({ name: 'title', description: 'The title of the book', example: 'Todo oscuro, sin estrellas'})
    name: String;

    @ApiProperty({ name: 'author', description: 'The author of the book', example: 'Stephen King'})
    author: String;

    @ApiProperty({ name: 'publicationDate', description: 'The publication date of the book', example: '2010-11-05T00:00:00.000Z'})
    publicationDate: Date;

    @ApiProperty({ name: 'genre', description: 'The genre of the book', example: 'Misterio'})
    genre: Genre;
}