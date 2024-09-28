import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const SwaggerConfig = (app: INestApplication<any>): void => {
    const version = '1.0';
    const config = new DocumentBuilder()
    .setTitle('Library')
    .setDescription('This is an API for a library to practice clean code')
    .setVersion(version)
    .addServer('/api')
    .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/v1/docs', app, document);
}