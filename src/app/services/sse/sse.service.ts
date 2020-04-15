import { Injectable } from '@angular/core';
import configs from 'src/app/configs/configs';
import {NgxPubSubService} from "@pscoped/ngx-pub-sub";

@Injectable({
  providedIn: 'root'
})
export class SSEService {

  private connection: any;

  constructor(private pubsub: NgxPubSubService) { }

  initiateConnection(email: string) {
    this.connection = new EventSource(configs.baseURL + '/messages/sse' + '?online=' + email);
    this.connection.addEventListener('message', (msg: any) => {
      const parsedMessage = JSON.parse(msg.data);
      this.pubsub.publishEvent('new-msg', parsedMessage);
    });
  }

  closeConnection() {
    this.connection = null
  }
}
