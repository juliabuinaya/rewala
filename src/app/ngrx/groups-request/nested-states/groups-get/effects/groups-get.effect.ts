import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { GroupsService } from '../../../../../core/services/groups.service';

//actions
import * as userRequest from '../../../../user-request/actions/user-request.actions'
import * as groupsGetRequest from '../actions/groups-get.actions'
import { GroupsGetSuccessAction, GroupsGetFailAction } from '../actions/index';
import { GroupsGetAction } from '../actions/groups-get.actions';


@Injectable()
export class GroupsGetEffects {
  
  constructor(private actions$: Actions, public groupsService: GroupsService) {
  }
  
  @Effect()
  getGroups$: Observable<Action> = this.actions$
  .ofType(userRequest.ActionTypes.GET_REQUEST_SUCCESS)
  .map((action: any) => new GroupsGetAction(action.payload));
  
  @Effect()
  groupsGetRequest$: Observable<Action> = this.actions$
  .ofType(groupsGetRequest.ActionTypes.REQUEST)
  .map(toPayload)
  .switchMap((payload: any) => {
    return this.groupsService.getUserGroups(payload.id)
    .map((res: any) => new GroupsGetSuccessAction(res))
    .catch(error => Observable.of(new GroupsGetFailAction(error)));
  });
  
}
