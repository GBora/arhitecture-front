import { Component, OnInit, Input } from '@angular/core';
import IUser from '../models/IUser';
import { MessageService } from '../services/messages/message.service';
import { UserService } from '../services/user/user.service';
import { IMessage } from '../models/IMessage';
import configs from '../configs/configs';

@Component({
  selector: 'app-message-thread',
  templateUrl: './message-thread.component.html',
  styleUrls: ['./message-thread.component.scss']
})
export class MessageThreadComponent implements OnInit {

  public messages: IMessage[] = [];
  public currentReply = '';
  @Input() friend: IUser;
  private messageService: MessageService;
  private userService: UserService;
  public self: IUser;

  constructor(messageService: MessageService, userService: UserService) {
    this.messageService = messageService;
    this.userService = userService;
  }

  ngOnInit() {
    this.messages = [];
    this.self = this.userService.getCurrentUser();

    this.messageService.getConversation(this.userService.getCurrentUser().email, this.friend.email).then((res: IMessage[]) => {
      this.messages = res;
    });

    const evtSource = new EventSource(configs.baseURL + '/messages/conversation-stream');

    evtSource.onmessage = (e) => {
      console.log('connection message');
      console.log(e.data);
    };

    evtSource.onerror = (e) => {
      console.log('connection error');
      console.log(e);
      evtSource.close();
    };

    evtSource.onopen = (e) => {
      console.log('connection open');
      console.log(e);
    };
  }

  public postReply(message: string) {
    this.messageService.addMessage({
      to: this.friend.email,
      content: message,
      from: this.userService.getCurrentUser().email
    }).then(() => {
      this.messageService.getConversation(this.userService.getCurrentUser().email, this.friend.email).then((res: IMessage[]) => {
        this.messages = res;
      });
    });
  }

}
