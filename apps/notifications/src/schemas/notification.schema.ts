import { BaseModel } from "@app/common";
import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { collection: "notifications", versionKey: false, timestamps: true } })
export class Notification extends BaseModel{

  @prop({ required: true})
  public userId!: string;

  @prop({ required: true})
  public channel!: string;

  @prop({ required: true})
  public content!: string;

}

export const NotificationModel = getModelForClass(Notification);
