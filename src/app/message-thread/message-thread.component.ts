import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-thread',
  templateUrl: './message-thread.component.html',
  styleUrls: ['./message-thread.component.scss']
})
export class MessageThreadComponent implements OnInit {

  public replies: string[] = [];
  public currentReply = '';

  constructor() { }

  ngOnInit() {
  }

  public reply(event: any) {
    if (event.code === 'Enter') {
      this.replies.push(this.currentReply);
      this.currentReply = '';
    }
  }

}
