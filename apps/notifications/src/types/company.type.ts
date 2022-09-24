import { Channel } from "./channel.enum";
import { User } from "./user.type";

export type Company  = {
    id: string;
    name: string;
    channels: Channel[];
    employees?: User[];
  }