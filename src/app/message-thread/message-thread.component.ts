import { Component, OnInit, Input } from '@angular/core';
// import * as io from 'socket.io-client';

import IUser from '../models/IUser';
import { MessageService } from '../services/messages/message.service';
import { UserService } from '../services/user/user.service';
import { IMessage } from '../models/IMessage';
import configs from '../configs/configs';
import { liveMapMessage } from '../helpers/liveMapMessage';

@Component({
  selector: 'app-message-thread',
  templateUrl: './message-thread.component.html',
  styleUrls: ['./message-thread.component.scss']
})
export class MessageThreadComponent implements OnInit {

  @Input() friend: IUser;

  public messages: IMessage[] = [];
  public currentReply = '';
  public myself: IUser;

  private messageService: MessageService;
  private userService: UserService;
  // private socket;
  private count: number = 7;

  constructor(messageService: MessageService, userService: UserService) {
    this.messageService = messageService;
    this.userService = userService;
  }

  onScrollUp() {
    this.count = this.count + 1;
    this.messageService.getConversation(this.userService.getCurrentUser().email, this.friend.email, this.count).then((res: IMessage[]) => {
      this.messages = res;
    });
  }

  ngOnInit() {
    this.messages = [];
    this.myself = this.userService.getCurrentUser();

    this.messageService.getConversation(this.userService.getCurrentUser().email, this.friend.email, this.count).then((res: IMessage[]) => {
      this.messages = res;
    });

    const source = new EventSource(configs.baseURL + '/messages/sse' + '?online=' + this.myself.email);
    source.addEventListener('message', (msg: any) => {
      const parsedMessage = JSON.parse(msg.data);
      if (parsedMessage.from === this.friend.email) {
        this.messages.push(liveMapMessage(parsedMessage, this.myself, this.friend));
      }
    });
  }

  public postReply(message: string) {
    this.messageService.addMessage({
      to: this.friend.email,
      content: message,
      from: this.userService.getCurrentUser().email
    }).then(() => {
      this.messageService.getConversation(this.userService.getCurrentUser().email, this.friend.email, this.count).then((res: IMessage[]) => {
        this.messages = res;
      });
    });
  }

}
