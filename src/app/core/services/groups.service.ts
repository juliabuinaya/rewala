import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Store } from '@ngrx/store';

import { IAppState } from '../../ngrx/state/app.state';
import * as groupsRequest from '../../ngrx/groups-request/actions/index';

@Injectable()
export class GroupsService {

  constructor(public restangular: Restangular,
              public store: Store<IAppState>) {
  }
  
  getUserGroups(userId) {
    return this.restangular.one('clients', userId).getList('groups');
  }
  
  createGroup(data) {
    this.store.dispatch(new groupsRequest.GroupPostAction(data));
  }
  
  createGroupRequest(payload: any) {
    return this.restangular.all('groups').post(payload);
  }
  
}