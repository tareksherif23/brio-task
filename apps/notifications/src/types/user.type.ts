import { Channel } from "./channel.enum";

export type User = {
    id: string;
    firstName: string;
    lastName: string;
    companyId: string;
    leaveBalance: string;
    channels: Channel[];
  }