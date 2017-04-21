import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppState } from '../../ngrx/state/app.state';
import * as authStateGetter from '../../ngrx/auth/states/auth-getter.state';

@Injectable()
export class SessionService {
  
  currentToken;
  
  constructor(private storage: Storage,
              public store: Store<IAppState>) {
  
    this.store.select(authStateGetter.getTokenFromState)
    .subscribe(token => this.currentToken = token);
    
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
  
  getCurrentToken() {
    if(this.currentToken) return this.currentToken;
  }

}