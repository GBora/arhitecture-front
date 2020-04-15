import { Component, OnInit, OnDestroy } from '@angular/core';
import IUser from './models/IUser';
import { UserService } from './services/user/user.service';
import { Router } from '@angular/router';
import {NgxPubSubService} from "@pscoped/ngx-pub-sub";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private title = 'Guarded Eyrie';
  public user: IUser;
  private userSub;

  constructor(private userService: UserService,
              private pubsub: NgxPubSubService,
              private router: Router) {}

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();

    this.userSub = this.pubsub.subscribe('user-change', (event: any) => {
      this.user = event;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  promptLogout(): void {
    if (confirm('Logout ?')) {
      this.userService.deleteCurrentUser();
      this.router.navigate(['/signup']);
    }
  }

}
