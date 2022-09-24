import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NotificationsModule } from './notifications.module';

async function bootstrap() {
  const app = await NestFactory.create(NotificationsModule);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen( app.get(ConfigService).get('PORT') );
}
bootstrap();
