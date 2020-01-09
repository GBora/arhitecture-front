import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import IUser from '../models/IUser';

@Component({
  selector: 'app-message-thread',
  templateUrl: './message-thread.component.html',
  styleUrls: ['./message-thread.component.scss']
})
export class MessageThreadComponent implements OnInit, OnChanges {

  public replies: string[] = [];
  public currentReply = '';
  @Input() friend: IUser;

  constructor() { }

  ngOnInit() {
    this.replies = [];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.friend.previousValue && changes.friend.currentValue.email !== changes.friend.previousValue.email) {
      this.replies = [];
      this.currentReply = '';
    }
  }

  public reply(event: any) {
    if (event.code === 'Enter') {
      this.replies.push(this.currentReply);
      this.currentReply = '';
    }
  }

}
