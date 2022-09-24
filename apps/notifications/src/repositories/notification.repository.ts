import { BaseRepository } from "@app/common/database/base.repository";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ReturnModelType } from "@typegoose/typegoose";
import { Notification } from "../schemas/notification.schema";

@Injectable()
export class NotificationRepository extends BaseRepository<Notification>{
    constructor(
        @InjectModel(Notification.modelName) 
        private readonly notificationModel: ReturnModelType<typeof Notification>  
        ){
        super(notificationModel);
    }
}