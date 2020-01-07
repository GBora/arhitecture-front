import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user/user.service';
import IUser from '../models/IUser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  public lastName: string;
  public firstName: string;
  public email: string;

  private userService: UserService;
  private router: Router;

  constructor(userService: UserService, router: Router) {
    this.userService = userService;
    this.router = router;
  }

  ngOnInit() {
    this.email = '';
    this.lastName = '';
    this.firstName = '';
  }

  public signup(): void {
    const user: IUser = {
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName
    };

    console.log(this.userService);
    this.userService.signUpUser(user).then((res: any) => {
      console.log(res);
      this.router.navigate(['/login']);
    });
  }

}
