import { Injectable } from '@angular/core';
import { Restangular } from 'ng2-restangular';
import { Store } from '@ngrx/store';


// app state
import * as appState from '../../ngrx/state/app.state';

import * as authRequestActions from '../../ngrx/auth-request/actions/index';
import { Observable } from 'rxjs';


@Injectable()
export class AuthService {
  
  constructor(public restangular: Restangular,
              public store: Store<appState.IAppState>) {
  }
  
  signUpUser(data) {
    console.log('service', data);
    this.store.dispatch(new authRequestActions.RegistrationPostAction(data));
  }
  
  signUpRequest(payload: any) {
    console.log('sending post req', payload);
    return this.restangular.all('clients').post(payload);
  }
}