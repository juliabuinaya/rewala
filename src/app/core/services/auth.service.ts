import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Store } from '@ngrx/store';


// app state
import * as appState from '../../ngrx/state/app.state';

// actions
import * as authRequest from '../../ngrx/auth-request/actions/index';
import * as user from '../../ngrx/user/actions/index';
import * as groups from '../../ngrx/groups/actions/index';
import * as questions from '../../ngrx/questions/actions/index';


@Injectable()
export class AuthService {
  
  constructor(public restangular: Restangular,
              public store: Store<appState.IAppState>) {
  }
  
  signUp(data) {
    this.store.dispatch(new authRequest.RegistrationPostAction(data));
  }
  
  signIn(data) {
    this.store.dispatch(new authRequest.SessionPostAction(data));
  }
  
  signUpRequest(payload: any) {
    return this.restangular.all('clients').post(payload);
  }
  
  signInRequest(payload: any) {
    return this.restangular.all('clients').customPOST(payload, 'login');
  }
  
  logout() {
    this.store.dispatch(new user.ClearUserAction());
    this.store.dispatch(new groups.ClearUserGroupsAction());
    this.store.dispatch(new questions.ClearQuestionsAction());
  }
}