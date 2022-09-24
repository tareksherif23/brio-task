import { getDiscriminatorModelForClass, prop } from "@typegoose/typegoose";
import { Notification, NotificationModel } from './notification.schema'

export class UiNotification extends Notification {

  @prop({ required: true})
  public uiWidgetId!: string;

}

export const UiNotificationModel = 
        getDiscriminatorModelForClass(NotificationModel, UiNotification);
