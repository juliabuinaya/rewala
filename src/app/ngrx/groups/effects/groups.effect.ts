import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { RoutingService } from '../../../core/services/routing.service';

//actions
import * as groupsGet from '../../groups-request/nested-states/groups-get/actions/groups-get.actions';
import * as groupPost from '../../groups-request/nested-states/group-post/actions/group-post.actions';
import { SetUserGroupsAction } from '../actions/index';
import { UpdateUserGroupsAction } from '../actions/groups.actions';


@Injectable()
export class GroupsEffects {
  
  constructor(private actions$: Actions,
              public routingService: RoutingService) {
  }
  
  @Effect()
  setGroups$: Observable<Action> = this.actions$
  .ofType(groupsGet.ActionTypes.REQUEST_SUCCESS)
  .map(toPayload)
  .map(payload => new SetUserGroupsAction(payload));
  
  @Effect()
  updateGroups$: Observable<Action> = this.actions$
  .ofType(groupPost.ActionTypes.REQUEST_SUCCESS)
  .map(action => new UpdateUserGroupsAction(toPayload(action)))
  .do(() => this.routingService.removeFromActive(2));
}
