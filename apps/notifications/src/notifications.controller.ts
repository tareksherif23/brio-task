import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SendNotificationRequest } from './dto/send-notification.request';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  async sendNotification(@Body() request: SendNotificationRequest){
    return this.notificationsService.sendNotification(request)
  }

  @Get()
  async getUiNotifications(@Query('userId') userId){
    return this.notificationsService.getUiNotifications(userId)
  }
}
