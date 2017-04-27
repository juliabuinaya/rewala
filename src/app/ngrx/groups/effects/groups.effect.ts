import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';


//actions
import * as groupsGet from '../../groups-request/nested-states/groups-get/actions/groups-get.actions';
import { SetUserGroupsAction } from '../actions/index';

@Injectable()
export class GroupsEffects {
  
  constructor(private actions$: Actions) {
  }
  
  @Effect()
  setUserGroups$: Observable<Action> = this.actions$
  .ofType(groupsGet.ActionTypes.REQUEST_SUCCESS)
  .map(toPayload)
  .map(payload => new SetUserGroupsAction(payload));

}
