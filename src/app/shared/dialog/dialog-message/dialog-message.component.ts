import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.scss']
})
export class DialogMessageComponent {

  @Input() content: string;
  @Input() isSelf: boolean;

  constructor() { }

}
