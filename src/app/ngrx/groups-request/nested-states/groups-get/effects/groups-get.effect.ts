import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { GroupsService } from '../../../../../core/services/groups.service';

//actions
import * as user from '../../../../user/actions/user.actions'
import * as groupsGetRequest from '../actions/groups-get.actions'
import { GroupsGetSuccessAction, GroupsGetFailAction } from '../actions/index';


@Injectable()
export class GroupsGetEffects {
  
  constructor(private actions$: Actions, public groupsService: GroupsService) {
  }
  
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
