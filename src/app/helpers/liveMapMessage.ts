import IUser from '../models/IUser';
import { IMessage } from '../models/IMessage';

export const liveMapMessage = (message: any, me: IUser, friend: IUser): IMessage => {
  return {
    content: message.content,
    sender: friend,
    receipient: me
  };
};
