import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices'
import { SendNotificationRequest } from './dto'
import { Channel, User, Company, TemplateData } from './types';
import { UiNotificationTemplate, EmailNotificationTemplate } from './templates';
import { firstValueFrom } from 'rxjs';
import { UiNotificationRepository } from './repositories/ui-notification.repository';
import { EmailNotificationRepository } from './repositories/email-notification.repository';

@Injectable()
export class NotificationsService {
  constructor(
    private readonly uiNotificationRepository: UiNotificationRepository,
    private readonly emailNotificationRepository: EmailNotificationRepository,
    @Inject('MOCK_DATA_SERVICE') private client: ClientProxy
  ){}

  async sendNotification(request: SendNotificationRequest) {
    const companyObservable = this.client.send<Company>({ cmd: 'get-company' }, { companyId: request.companyId });
    const userObservable = this.client.send<User>({ cmd: 'get-user' }, { userId: request.userId });
    const company = await firstValueFrom(companyObservable)
    const user = await firstValueFrom(userObservable)
    const data = {
      company,
      user
    };
    const type = request.notificationType
    const userSubscribedChannels = company.channels.filter(channel => user.channels.includes(channel))
    userSubscribedChannels.map(channel => this.createNotification(type, channel, user, data))
  }

  async getUiNotifications(userId: string) {
    return this.uiNotificationRepository.findAll({userId, channel:"UI"});
  }

  async createNotification(notificationType: string, channel: Channel, user: User, data: TemplateData){
    switch (channel){

      case Channel.EMAIL:
        console.log(
          EmailNotificationTemplate[notificationType]['subject'](data) + '\n' +
          EmailNotificationTemplate[notificationType]['content'](data)
        );
        this.emailNotificationRepository.create({
            channel: channel,
            userId: user.id,
            subject: EmailNotificationTemplate[notificationType]['subject'](data),
            content: EmailNotificationTemplate[notificationType]['content'](data)
        })
        break;

      case Channel.UI:
        this.uiNotificationRepository.create({
            channel: channel,
            userId: user.id,
            content: UiNotificationTemplate[notificationType]['content'](data),
            uiWidgetId: 'test_xyz'
          })
        break;
      default:
        
    }
  }

  

}
