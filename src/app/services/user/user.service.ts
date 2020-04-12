import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import IUser from '../../models/IUser';
import { Observable } from 'rxjs';
import configs from '../../configs/configs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private base = configs.baseURL;
  private currentUser: IUser;
  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Response-Type': 'text'
    })
  };

  constructor(private http: HttpClient) { }

  public signUpUser(user: IUser): Promise<any> {
    const url = this.base + '/users/new';
    return this.http.post(url, user, this.options).toPromise();
  }

  public loginUser(email: string): Promise<any> {
    const url = this.base + '/users/login';
    const content = { email };
    return this.http.post(url, content, this.options).toPromise();
  }

  public search(email: string): Observable<any> {
    const url = this.base + '/users/search';
    const request = {
      email
    };
    return this.http.post(url, request, this.options);
  }

  public addFriend(email1: string): Promise<any> {
    const url = this.base + '/friendship/add-friend';
    const request = {
      email1,
      email2: this.getCurrentUser().email
    };
    return this.http.post(url, request, this.options).toPromise();
  }

  public getFriends(): Observable<any> {
    const url = this.base + '/friendship/get-friends';
    const request = {
      email: this.getCurrentUser().email
    };
    return this.http.post(url, request, this.options);
  }

  public setCurentUser(user: IUser): void {
    this.currentUser = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  public deleteCurrentUser(): void {
    this.currentUser = null;
    localStorage.removeItem('user');
  }

  public getCurrentUser(): IUser {
    if (this.currentUser) {
      return this.currentUser;
    } else {
      return JSON.parse(localStorage.getItem('user'));
    }
  }

}
