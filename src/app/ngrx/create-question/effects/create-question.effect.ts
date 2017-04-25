// angular
import { Injectable } from '@angular/core';

// libs
import { Router, NavigationEnd } from '@angular/router';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

//app
import { IAppState } from '../../state/app.state';

@Injectable()
export class CreateQuestionEffects {
  
  constructor(private actions$: Actions) {
  }

  //@Effect()
  //getAffiliatedMyGroup: Observable<Action> = this.actions$
  //  .ofType(
  //    myGroupAffiliatedGet.MyGroupAffiliatedGetActionTypes.REQUEST_SUCCESS,
  //  )
  //  .map((action: any) => {
  //    return new createWizard.AffilatedGroupLoadSuccessAction(action.payload.data);
  //  });
  //
  //@Effect()
  //finishSuccess$: Observable<Action> = this.actions$
  //  .ofType(
  //    groupsPost.GroupsPostActionTypes.REQUEST_SUCCESS,
  //  )
  //  .map((action: any) => {
  //    return new createWizard.FinishCreatingSuccessAction(action.payload.data);
  //  });
  //
  //@Effect({dispatch: false})
  //finishSuccessRoutingToMyGroups$: Observable<Action> = this.actions$
  //  .ofType(
  //    createWizard.ActionTypes.FINISH_CREATE_SUCCESS
  //  )
  //  .do((action: any) => {
  //    this.router.navigate(['groups','my-groups']);
  //  });
  
}
