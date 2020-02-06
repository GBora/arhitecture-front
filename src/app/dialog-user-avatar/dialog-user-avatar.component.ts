import { Component, Input } from '@angular/core';
import IUser from '../models/IUser';

@Component({
  selector: 'app-dialog-user-avatar',
  templateUrl: './dialog-user-avatar.component.html',
  styleUrls: ['./dialog-user-avatar.component.scss']
})
export class DialogUserAvatarComponent {

  @Input() user: IUser;

  constructor() { }

}
