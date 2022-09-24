import {IsString, IsNotEmpty} from 'class-validator';

export class SendNotificationRequest{
    @IsNotEmpty()
    companyId: string;

    @IsNotEmpty()
    userId: string;

    @IsNotEmpty()
    @IsString()
    notificationType: string;
}