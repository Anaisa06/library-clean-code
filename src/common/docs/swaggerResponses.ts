import { ApiProperty } from "@nestjs/swagger";

export class ApiSuccessResponseDto<T> {
    @ApiProperty({ example: 200, description: 'The HTTP status code' })
    statusCode: number;
  
    @ApiProperty({ default: 'Request was succesful'})
    message: string;
  
    @ApiProperty()
    data: T;
  
  }

  export class ApiCreatedResponseDto<T> {
    @ApiProperty({ example: 201, description: 'The HTTP status code', default: 201 })
    statusCode: number;
  
    @ApiProperty({ default: 'Request was succesful'})
    message: string;
  
    @ApiProperty()
    data: T;
  
  }

  export class ApiBadRequestResponseDto {
    @ApiProperty({ example: 400, description: 'The HTTP status code' })
    statusCode: number;

    @ApiProperty({ example: '2024-09-28T16:22:15.566Z', description: 'Timestamp at the moment of the error'})
    timestamp: Date;

    @ApiProperty({ example: '/api/books', description: 'The path that returned an error'})
    path: string;
  
    @ApiProperty({ example: 'Name is necessary', description: 'An array of field error messages', default: 'Name is necessary' })
    message: string;
  
  }

  export class ApiNotFoundResponseDto {
    @ApiProperty({ example: 400, description: 'The HTTP status code' })
    statusCode: number;

    @ApiProperty({ example: '2024-09-28T16:22:15.566Z', description: 'Timestamp at the moment of the error'})
    timestamp: Date;

    @ApiProperty({ example: '/api/books', description: 'The path that returned an error'})
    path: string;
  
    @ApiProperty({ example: 'No books were found', description: 'The error message', default: 'No books were found' })
    message: string;
  }
