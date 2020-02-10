import { Component, OnInit, OnDestroy } from '@angular/core';
import IUser from './models/IUser';
import { UserService } from './services/user/user.service';
import { PubSubService } from 'angular7-pubsub';
import { Router } from '@angular/router';

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
              private pubsub: PubSubService,
              private router: Router) {}

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();

    this.userSub = this.pubsub.$sub('user-change').subscribe((event: any) => {
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
