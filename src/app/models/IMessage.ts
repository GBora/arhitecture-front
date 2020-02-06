import IUser from "./IUser";

export interface IMessage {
    content: string;
    sender: IUser;
    receipient: IUser;
}