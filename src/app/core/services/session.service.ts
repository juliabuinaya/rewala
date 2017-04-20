import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

@Injectable()
export class SessionService {
  
  constructor(private storage: Storage) {
  }
  
  setAccessToken(token) {
    let subscriber = Observable.fromPromise(this.storage.ready())
    .subscribe(() => {
      this.storage.set('rewAccessToken', token);
      subscriber.unsubscribe();
    });
  }
  
  getAccessToken() {
    return Observable.fromPromise(this.storage.ready())
    .switchMap(() => {
      return Observable.fromPromise(this.storage.get('rewAccessToken'))
    });
  }
  
  removeAccessToken() {
    let subscriber = Observable.fromPromise(this.storage.ready())
    .subscribe(() => {
      this.storage.remove('rewAccessToken');
      subscriber.unsubscribe();
    });
  }

}