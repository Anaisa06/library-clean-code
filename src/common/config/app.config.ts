import { INestApplication, ValidationPipe } from "@nestjs/common";
import { HttpExceptionFilter } from "../exception/exception.filter";

export const globalConfig = (app: INestApplication<any>) => {
    app.useGlobalPipes(new ValidationPipe({
        transform: true,
        whitelist: true, 
        stopAtFirstError: true,

    }));

    app.useGlobalFilters(new HttpExceptionFilter());

}