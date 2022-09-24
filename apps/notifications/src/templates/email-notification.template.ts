import { TemplateData } from "../types"
import { INotificationTemplate } from "./notification.template"

export const EmailNotificationTemplate: INotificationTemplate = {

    'monthly-payslip' : {
        'subject': (data: TemplateData) => { 
            return `monthly payslip for ${data.user.firstName}`
        },
        'content': (data: TemplateData) => {
            return `Hello ${data.user.firstName}, please find you monthly payslip info attached in this mail`
        }
    },

    'happy-birthday' : {
        'subject': (data: TemplateData) => { 
            return `Happy birthday ${data.user.firstName}!`
        },
        'content': (data: TemplateData) => {
             return `${data.company.name} is wishing you a happy birthday!`
        }
    }

}