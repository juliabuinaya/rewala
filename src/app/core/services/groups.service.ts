import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppState } from '../../ngrx/state/app.state';

//actions
import * as groupsRequest from '../../ngrx/groups-request/actions/index';
//getters
import * as groupsStateGetter from '../../ngrx/groups/states/groups-getter.state';


@Injectable()
export class GroupsService {
  
  public groups$: Observable<any>;

  constructor(public restangular: Restangular,
              public store: Store<IAppState>) {
    
    this.groups$ = this.store.select(groupsStateGetter.getGroupsEntitiesState);
    
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