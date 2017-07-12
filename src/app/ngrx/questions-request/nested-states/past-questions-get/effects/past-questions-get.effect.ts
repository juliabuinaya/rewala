import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { QuestionsService } from '../../../../../core/services/questions.service';
import { RoutingService } from '../../../../../core/services/routing.service';

import { DashboardPage } from '../../../../../pages/dashboard/dashboard';


import * as userRequest from '../../../../user-request/actions/user-request.actions';
import * as completedQuestionsGet from '../../completed-questions-get/actions/completed-questions-get.actions';

import { SpinnerLoadingEndAction } from '../../../../spinner/actions/spinner.actions';


@Injectable()
export class CompletedQuestionsGetEffects {

  constructor(private actions$: Actions,
              public questionsService: QuestionsService, public routingService: RoutingService) {
  }
  
  //@Effect()
  //getVoiceGivenQuestions$: Observable<Action> = this.actions$
  //.ofType(userRequest.ActionTypes.GET_REQUEST_SUCCESS)
  //.map((action: any) => new CompletedQuestionsGetAction());
  //
  //@Effect()
  //getCompletedQuestionsRequest$: Observable<Action> = this.actions$
  //.ofType(completedQuestionsGet.ActionTypes.REQUEST)
  //.switchMap((action: any) => {
  //  return this.questionsService.getCompletedQuestionsRequest()
  //  .map((res: any) => new CompletedQuestionsGetSuccessAction(res.data))
  //  .catch(error => Observable.of(new CompletedQuestionsGetFailAction(error)));
  //});
  //
  //@Effect()
  //redirectToDashboardPage$: Observable<Action> = this.actions$
  //.ofType(completedQuestionsGet.ActionTypes.REQUEST_SUCCESS)
  //.map((action: any) => {
  //  this.routingService.pushRootPage(DashboardPage);
  //  return new SpinnerLoadingEndAction();
  //});
  //
  //@Effect()
  //spinnerEnd$: Observable<Action> = this.actions$
  //.ofType(completedQuestionsGet.ActionTypes.REQUEST_FAIL)
  //.map((action: any) => {
  //  return new SpinnerLoadingEndAction();
  //});
  
}
