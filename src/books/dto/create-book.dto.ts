import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsDate, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Genre } from "src/common/enums/genre.enum";

export class CreateBookDto {
    @ApiProperty({ name: 'title', description: 'title of the book', example: 'Contacto'})
    @IsNotEmpty()
    @IsString()
    title: String;

    @ApiProperty({ name: 'author', description: 'the author of the book', example: 'Carl Sagan'})
    @IsNotEmpty()
    @IsString()
    author: String;

    @ApiProperty({ name: 'publication date', description: 'publication date of the book', example: '1985-09-27'})
    @Transform(({ value }) => value ? new Date(value) : null)
    @IsDate()
    publicationDate: Date;

    @ApiProperty({ name: 'genre', description: 'genre of the book', example: 'Ciencia Ficción'})
    @IsNotEmpty()
    @IsEnum(Genre)
    genre: Genre;
}
