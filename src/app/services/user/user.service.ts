import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import IUser from '../../models/IUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private base = 'http://localhost:8080';
  private base = 'https://guarded-eyrie-20015.herokuapp.com';
  private currentUser: string;

  constructor(private http: HttpClient) { }

  public signUpUser(user: IUser): Promise<any> {
    const url = this.base + '/users/new';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Response-Type': 'text'
      })
    };
    return this.http.post(url, user, httpOptions).toPromise();
  }

  public search(email: string): Observable<any> {
    const url = this.base + '/users/search';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Response-Type': 'text'
      })
    };
    const request = {
      email
    };
    return this.http.post(url, request, httpOptions);
  }

  public addFriend(email1: string): Promise<any> {
    const url = this.base + '/friendship/add-friend';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Response-Type': 'text'
      })
    };
    const request = {
      email1,
      email2: this.getCurrentUser()
    };
    return this.http.post(url, request, httpOptions).toPromise();
  }

  public getFriends(): Observable<any> {
    const url = this.base + '/friendship/get-friends';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Response-Type': 'text'
      })
    };
    const request = {
      email: this.getCurrentUser()
    };
    return this.http.post(url, request, httpOptions);
  }

  public setCurentUser(email: string): void {
    this.currentUser = email;
    localStorage.setItem('user', email);
  }

  public getCurrentUser(): string {
    if (this.currentUser) {
      return this.currentUser;
    } else {
      return localStorage.getItem('user');
    }
  }

}
