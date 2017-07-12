import {Injectable, Inject} from "@angular/core";
import {Observable} from "rxjs";
import {APP_CONFIG, AppConfig} from "../../app.config";
import * as io from "socket.io-client";
import {SessionService} from './session.service';

@Injectable()
export class SocketService {

  private socket;
  
  constructor(
    @Inject(APP_CONFIG) public appConfig:AppConfig,
    public sessionService: SessionService
  ) {
  }

  setOpen() {
    const token = this.sessionService.getCurrentToken();
    
    if (!this.socket) this.socket = io.connect(this.appConfig.socketUrl);
    this.socket.on('connect', () => {
      this.socket.emit('authentication', {token});
      this.socket.on('authenticated', value => {
        if (!value) return;
        console.log(`User is authenticated`);
      });
    });
  }

  subscribeTo(event) {
    this.setOpen();
    return new Observable(observer => {
      this.socket.on(event, data => {
        console.log("service: " + JSON.stringify(data));
        observer.next(data);
      });
    });
  }
  
  setClose() {
    this.socket.emit('out');
  }
}
