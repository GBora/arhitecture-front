import { Injectable } from '@angular/core';
import configs from 'src/app/configs/configs';
import { PubSubService } from 'angular7-pubsub';

@Injectable({
  providedIn: 'root'
})
export class SSEService {

  private connection: any;

  constructor(private pubsub: PubSubService) { }

  initiateConnection(email: string) {
    this.connection = new EventSource(configs.baseURL + '/messages/sse' + '?online=' + email);
    this.connection.addEventListener('message', (msg: any) => {
      const parsedMessage = JSON.parse(msg.data);
      this.pubsub.$pub('new-msg', parsedMessage);
    });
  }

  closeConnection() {
    this.connection = null
  }
}
