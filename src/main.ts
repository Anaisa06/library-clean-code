import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfig } from './common/config/swagger.config';
import { globalConfig } from './common/config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerConfig(app);

  app.enableCors();

  app.setGlobalPrefix('api');

  globalConfig(app);

  await app.listen(3000);
}
bootstrap();
