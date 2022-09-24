import { TemplateData } from "../types"
import { INotificationTemplate } from "./notification.template"

export const UiNotificationTemplate: INotificationTemplate = {

    'leave-balance-remider' : {
        'content': (data: TemplateData) => {
            return `Hi ${data.user.firstName}, this is a reminder that you have ${data.user.leaveBalance} days left in your annual vacation balance!`
        }
    },

    'happy-birthday' : {
        'content': (data: TemplateData) => {
            return `Happy birthday ${data.user.firstName}!`
        }
    }

}