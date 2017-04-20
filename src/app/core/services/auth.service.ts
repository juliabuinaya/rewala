import { Injectable } from '@angular/core';
import { Restangular } from 'ng2-restangular';
import { Store } from '@ngrx/store';


// app state
import * as appState from '../../ngrx/state/app.state';
import * as authRequestActions from '../../ngrx/auth-request/actions/index';


@Injectable()
export class AuthService {
  
  constructor(public restangular: Restangular,
              public store: Store<appState.IAppState>) {
  }
  
  signUp(data) {
    this.store.dispatch(new authRequestActions.RegistrationPostAction(data));
  }
  
  signIn(data) {
    this.store.dispatch(new authRequestActions.SessionPostAction(data));
  }
  
  signUpRequest(payload: any) {
    return this.restangular.all('clients').post(payload);
  }
  
  signInRequest(payload: any) {
    return this.restangular.all('clients').customPOST(payload, 'login');
  }
}