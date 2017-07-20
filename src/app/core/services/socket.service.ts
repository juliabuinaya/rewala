import { Injectable, Inject } from "@angular/core";

import { APP_CONFIG, AppConfig } from "../../app.config";
import * as io from "socket.io-client";

import { SessionService } from './session.service';
import { AlertService } from './alert.service';

import { Store } from '@ngrx/store';
import { IAppState } from '../../ngrx/state/app.state';
import * as questions from '../../ngrx/questions/actions/index';

@Injectable()
export class SocketService {

  private socket;
  
  constructor(@Inject(APP_CONFIG) public appConfig: AppConfig,
              public store: Store<IAppState>,
              public sessionService: SessionService,
              public alertService: AlertService) {
  }

  setOpen() {
    const token = this.sessionService.getCurrentToken();
    if (!this.socket) {
      this.socket = io(
        this.appConfig.socketUrl,
        {
          transports: ['websocket'],
          upgrade: false,
          forceNew: true
        }
      ).connect();
      this.socket.on('connect', () => {
        this.socket.emit('authentication', {token});
        this.socket.on('authenticated', value => {
          if (!value) return;
        });
      });
    }
  }
  
  subscribeTo(event) {
    this.setOpen();
    return this.socket.on(event, data => {
      
      switch(event) {
        
        case 'create': {
          this.alertService.showSuccessAlert('New question created and awaiting your vote', null, null, 3000);
          this.store.dispatch(new questions.UpdateAwaitingQuestionsAction(data));
          break;
        }
  
        case 'delete': {
          this.alertService.showSuccessAlert('Question was deleted:', data.text, null, 5000);
          this.store.dispatch(new questions.DeleteQuestionAction(data.id));
          break;
        }
        
        case 'deadline': {
          console.log('deadline', data);
        }
        
        default: {
          break;
        }
      }
      
    });
  }
  
  setClose() {
    this.socket.emit('close');
    this.socket = null;
  }
}
