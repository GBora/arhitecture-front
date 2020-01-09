import { Component, OnInit } from '@angular/core';
import IUser from '../models/IUser';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  public showSearch = false;
  public showThread = false;
  public friends: IUser[] = [];
  private userService: UserService;
  public friendConversing: IUser;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit() {
    this.userService.getFriends().subscribe((el: any) => {
      this.friends = el;
    });
  }

  search() {
    this.showSearch = true;
  }

  addedFriend(friend: IUser) {
    this.showSearch = false;
    this.userService.addFriend(friend.email).then((res: any) => {
      this.friends.push(friend);
    });
  }

  startConv(friend: IUser) {
    this.showThread = false;
    this.friendConversing = friend;
    this.showThread = true;
  }

}
