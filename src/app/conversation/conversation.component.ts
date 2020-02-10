import { Component, OnInit } from '@angular/core';
import IUser from '../models/IUser';
import { UserService } from '../services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  public showSearch = false;
  public showThread = false;
  public friends: IUser[] = [];
  public friendConversing: IUser;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    const urlEmail = this.route.snapshot.queryParams.email;
    this.userService.getFriends().subscribe((el: any) => {
      this.friends = el;
      if (urlEmail) {
        this.friends.forEach((friend: IUser) => {
          if (friend.email === urlEmail) {
            this.startConv(friend);
          }
        });
      }
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
    this.router.navigate(['/conversation'], { queryParams: { email: friend.email } });
    this.showThread = false;
    this.friendConversing = friend;
    this.showThread = true;
  }

}
