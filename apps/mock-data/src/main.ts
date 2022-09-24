import { NestFactory } from '@nestjs/core';
import { MockDataModule } from './mock-data.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MockDataModule,
    {
      transport: Transport.TCP,
      options:{
        host: 'mock-data',
        port: 5000,
      }
    },
  );
  await app.listen();
}
bootstrap();