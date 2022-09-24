import { DatabaseModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationsController } from './notifications.controller';
import { UiNotificationRepository } from './repositories/ui-notification.repository';
import { UiNotification } from './schemas/ui-notification.schema';
import { EmailNotificationRepository } from './repositories/email-notification.repository';
import { EmailNotification } from './schemas/email-notification.schema';
import { NotificationsService } from './notifications.service';
import { ClientsModule, Transport } from '@nestjs/microservices'

@Module({
  imports: [
  ConfigModule.forRoot({
    isGlobal:true,
    envFilePath: '.apps/notifications/.env',
  }),
  DatabaseModule,
  MongooseModule.forFeature([{ name: UiNotification.modelName, schema: UiNotification.schema}]),
  MongooseModule.forFeature([{ name: EmailNotification.modelName, schema: EmailNotification.schema}]),
  ClientsModule.register([
    { name: 'MOCK_DATA_SERVICE', transport: Transport.TCP, 
      options:{
        host: 'mock-data',
        port: 5000,
      }
    },
  ]),
],
  controllers: [NotificationsController],
  providers: [NotificationsService, UiNotificationRepository, EmailNotificationRepository],
})
export class NotificationsModule {}
