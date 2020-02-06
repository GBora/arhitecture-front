import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import configs from 'src/app/configs/configs';
import IMessageInput from 'src/app/models/IMessageInput';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private base = configs.baseURL;

  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Response-Type': 'text'
    })
  };

  constructor(private http: HttpClient) { }

  public addMessage(message: IMessageInput): Promise<any> {
    const url = this.base + '/messages/add-message';
    return this.http.post(url, message, this.options).toPromise();
  }

  public getConversation(user1: string, user2: string): Promise<any> {
    const url = this.base + '/messages/get-conversation';
    const request = {
      user1,
      user2
    };
    return this.http.post(url, JSON.stringify(request), this.options).toPromise();
  }
}
