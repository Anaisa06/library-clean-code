import { applyDecorators, Type } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiParam, ApiQuery } from "@nestjs/swagger";
import { ApiBadRequest, ApiCreated, ApiNotFound, ApiSuccess, ApiSuccessArray } from "src/common/decorators/swagger.decorators";
import { CreateBookDto } from "../dto/create-book.dto";
import { UpdateBookDto } from "../dto/update-book.dto";

export function ApiDocCreateBook<T>(entity: Type<T>) {
    return applyDecorators(
        ApiOperation({
            summary: 'Creates a new book',
            description: 'This endpoint allows to create a new book in the system.'
        }),
        ApiBody({
            type: CreateBookDto
        }),
        ApiCreated(entity),
        ApiBadRequest()
    ) 
}

export function ApiDocGetBooks<T>(entity: Type<T>) {
    return applyDecorators(
        ApiOperation({
            summary: 'Retrieves all available books or filter by date, author or genre',
            description: 'Retrieves a list of all the books in the system or filters by query params'
        }),
        ApiQuery({
            name: 'author',
            required: false,
            type: String,
            description: 'The name of the author',
            example: 'Carl Sagan'
        }),
        ApiQuery({
            name: 'genre',
            required: false,
            type: String,
            description: 'The genre to filter the books',
            example: 'Misterio'
        }),
        ApiSuccessArray(entity),
        ApiNotFound(),
        ApiBadRequest()
    )
}

export function ApiDocGetOneBook<T> (entity: Type<T>) {
    return applyDecorators ( 
        ApiOperation ({
            summary: 'Retrieve a book by its ID',
            description: 'Retrieves a book by its ID'
        }),
        ApiParam({
            name: 'id',
            required: true,
            type: String,
            description: 'Book ID'
        }),
        ApiSuccess(entity),
        ApiNotFound(),
        ApiBadRequest()
    )
}

export function ApiDocUpdateBook<T>(entity: Type<T>) {
    return applyDecorators(
        ApiOperation({
            summary: 'Updates one book by ID',
            description: 'This endpoint allows to update one book with the provided ID'
        }),
        ApiBody({
            type: UpdateBookDto
        }),
        ApiParam({
            name: 'id',
            required: true,
            type: String,
            description: 'Book ID'
        }),
        ApiCreated(entity),
        ApiBadRequest(),
        ApiNotFound()
    ) 
}

export function ApiDocDeleteBook<T>(entity: Type<T>) {
    return applyDecorators ( 
        ApiOperation ({
            summary: 'Deletes a book by its ID',
            description: 'Delete a book by its ID'
        }),
        ApiParam({
            name: 'id',
            required: true,
            type: String,
            description: 'Book ID'
        }),
        ApiSuccess(entity),
        ApiNotFound(),
        ApiBadRequest()
    )
}