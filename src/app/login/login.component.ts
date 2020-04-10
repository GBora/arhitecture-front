import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import IUser from '../models/IUser';
import { PubSubService } from 'angular7-pubsub';
import { SSEService } from '../services/sse/sse.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;

  constructor(private router: Router,
              private userService: UserService,
              private pubsub: PubSubService,
              private sse: SSEService) {}

  ngOnInit() {
    this.email = '';
  }

  public login(): void {
    this.userService.loginUser(this.email).then((user: IUser) => {
      this.userService.setCurentUser(user);
      // this.sse.initiateConnection(user.email);
      this.pubsub.$pub('user-change', user);
      this.router.navigate(['/friends-list']);
    }, (err: any) => {
      alert('Something went wrong, could not login.');
    });
  }

}
