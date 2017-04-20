import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

@Injectable()
export class SessionService {
  
  currentToken;
  
  constructor(private storage: Storage) {
  }
  
  setAccessToken(token) {
    Observable.fromPromise(this.storage.ready())
    .subscribe(() => this.storage.set('rewAccessToken', token));
    
  }
  
  getAccessToken() {
    return Observable.fromPromise(this.storage.ready())
    .switchMap(() => {
      return Observable.fromPromise(this.storage.get('rewAccessToken'))
    });
  }
  
  removeAccessToken() {
    return Observable.fromPromise(this.storage.ready())
    .switchMap(() => {
      return this.storage.remove('rewAccessToken');
    });
  }
  
  getCurrentTokenId() {
    if(this.currentToken) {
      return this.currentToken.id;
    }
  }
}