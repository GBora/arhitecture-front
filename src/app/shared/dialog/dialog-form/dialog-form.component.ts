import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss']
})
export class DialogFormComponent {

  public currentReply = '';

  @Output() messageAdded: EventEmitter<any> = new EventEmitter();

  constructor() { }

  reply(event: any) {
    if (event.code === 'Enter') {
      const messageCopy = '' + this.currentReply;
      this.currentReply = '';
      this.messageAdded.emit(messageCopy);
    }
  }

}
