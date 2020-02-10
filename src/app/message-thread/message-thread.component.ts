import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import IUser from '../models/IUser';
import { MessageService } from '../services/messages/message.service';
import { UserService } from '../services/user/user.service';
import { IMessage } from '../models/IMessage';

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
  }

  public reply(event: any) {
    if (event.code === 'Enter') {
      const messageCopy = '' + this.currentReply;
      this.currentReply = '';
      this.messageService.addMessage({
        to: this.friend.email,
        content: messageCopy,
        from: this.userService.getCurrentUser().email
      }).then(() => {
        this.messageService.getConversation(this.userService.getCurrentUser().email, this.friend.email).then((res: IMessage[]) => {
          this.messages = res;
        });
      });
    }
  }

}
