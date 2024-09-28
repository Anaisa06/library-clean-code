import { ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsDate, IsOptional, IsString } from "class-validator";

export class BooksQueryDto {
    @ApiPropertyOptional({ name: 'author', description: 'the author of the books to filter', example: 'Sagan'})
    @IsOptional()
    @IsString()
    author: String;

    @ApiPropertyOptional({ name: 'genre', description: 'the genre of the book to filter', example: 'Fantasía'})
    @IsOptional()
    @IsString()
    genre: String;

    @ApiPropertyOptional({ name: 'publicationDate', description: 'the publication date to filter the books', example: '1985-09-27'})
    @IsOptional()
    @Transform(({value}) => value ? new Date(value) : null)
    @IsDate()
    publicationDate: Date;
}