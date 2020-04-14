import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import IUser from '../../models/IUser';

@Component({
  selector: 'app-friend-dialog-page',
  templateUrl: './friend-dialog-page.component.html',
  styleUrls: ['./friend-dialog-page.component.scss']
})
export class FriendDialogPageComponent implements OnInit {
  public friends: IUser[] = [];
  public selectedFriend: IUser;

  constructor(private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    const urlEmail = this.route.snapshot.params.email;
    this.userService.getFriends().subscribe((el: any) => {
      this.friends = el;
      if (urlEmail) {
        this.friends.forEach((friend: IUser) => {
          if (friend.email === urlEmail) {
            this.selectedFriend = friend;
          }
        });
      }
    });
  }

}
