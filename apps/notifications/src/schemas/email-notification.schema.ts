import { getDiscriminatorModelForClass, getModelForClass, prop } from "@typegoose/typegoose";
import { NotificationModel, Notification } from "./notification.schema";

export class EmailNotification extends Notification {

  @prop({ required: true})
  public subject!: string;

  @prop({ type: () => [String] })
  public ccList?: string[];

}

export const EmailNotificationModel =
        getDiscriminatorModelForClass(NotificationModel, EmailNotification);