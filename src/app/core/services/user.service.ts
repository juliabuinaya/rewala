import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppState } from '../../ngrx/state/app.state';
//getters
import * as userStateGetter from '../../ngrx/user/states/user-getter.state';


@Injectable()
export class UserService {
  
  public user$: Observable<any>;
  public userId$: Observable<any>;
  public userEmail$: Observable<any>;

  constructor(public restangular: Restangular,
              public store: Store<IAppState>) {
    
    this.user$ = this.store.select(userStateGetter.getUserState);
    this.userId$ = this.store.select(userStateGetter.getIdFromState);
    this.userEmail$ = this.store.select(userStateGetter.getEmailFromState);
    
  }
  
  getUserData(token) {
    return this.restangular.one('tokens', token).one('user').get();
  }
  
}