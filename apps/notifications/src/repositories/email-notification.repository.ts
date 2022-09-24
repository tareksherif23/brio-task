import { BaseRepository } from "@app/common/database/base.repository";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ReturnModelType } from "@typegoose/typegoose";
import { EmailNotification } from "../schemas/email-notification.schema";

@Injectable()
export class EmailNotificationRepository extends BaseRepository<EmailNotification>{
    constructor(
        @InjectModel(EmailNotification.modelName) 
        private readonly emailNotification: ReturnModelType<typeof EmailNotification>  
        ){
        super(emailNotification);
    }
}