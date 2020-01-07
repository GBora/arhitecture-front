import { Component, OnInit } from '@angular/core';
import IUser from '../models/IUser';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  public showSearch = false;

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.showSearch = true;
  }

  addedFriend(friend: IUser) {
    this.showSearch = false;
  }

}
