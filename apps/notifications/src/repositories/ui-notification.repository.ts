import { BaseRepository } from "@app/common/database/base.repository";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ReturnModelType } from "@typegoose/typegoose";
import { UiNotification } from "../schemas/ui-notification.schema";

@Injectable()
export class UiNotificationRepository extends BaseRepository<UiNotification>{
    constructor(
        @InjectModel(UiNotification.modelName) 
        private readonly uiNotificationModel: ReturnModelType<typeof UiNotification>  
        ){
        super(uiNotificationModel);
    }
}