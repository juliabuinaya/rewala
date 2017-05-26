import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { GroupsService } from '../../../../../core/services/groups.service';
import { CreateQuestionGroupsPage } from '../../../../../pages/create-question/create-question-groups/create-question-groups';

import * as groupPost from '../actions/group-post.actions';
import { GroupPostFailAction, GroupPostSuccessAction } from '../actions/index';

@Injectable()
export class GroupPostEffects {
  
  constructor(private actions$: Actions,
              public groupsService: GroupsService) {
  }
  
  @Effect()
  groupPost$: Observable<Action> = this.actions$
  .ofType(groupPost.ActionTypes.REQUEST)
  .switchMap((action: any) => {
    return this.groupsService.createGroupRequest(toPayload(action))
    .map((res: any) => new GroupPostSuccessAction(res))
    .catch(error => Observable.of(new GroupPostFailAction(error)));
  });
}
