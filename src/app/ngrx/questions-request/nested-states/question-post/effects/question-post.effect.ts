import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { QuestionsService } from '../../../../../core/services/questions.service';
import { RoutingService } from '../../../../../core/services/routing.service';
import { DashboardPage } from '../../../../../pages/dashboard/dashboard';

//actions
import * as questionPost from '../actions/question-post.actions';
import { QuestionPostSuccessAction, QuestionPostFailAction } from '../actions/question-post.actions';
import { SpinnerLoadingStartAction, SpinnerLoadingEndAction } from '../../../../spinner/actions/spinner.actions';

@Injectable()
export class QuestionPostEffects {
  
  constructor(private actions$: Actions,
              public questionsService: QuestionsService,
              public routingService: RoutingService) {
  }
  
  @Effect()
  questionPost$: Observable<Action> = this.actions$
  .ofType(questionPost.ActionTypes.REQUEST)
  .map(toPayload)
  .switchMap((payload: any) => {
    return this.questionsService.createQuestionRequest(payload)
    .map((res: any) => new QuestionPostSuccessAction(res))
    .catch(error => Observable.of(new QuestionPostFailAction(error)));
  });
  
  @Effect()
  spinnerStart$: Observable<Action> = this.actions$
  .ofType(questionPost.ActionTypes.REQUEST)
  .map((action: any) => {
    return new SpinnerLoadingStartAction();
  });
  
  @Effect()
  redirectToDashboardPage$: Observable<Action> = this.actions$
  .ofType(questionPost.ActionTypes.REQUEST_SUCCESS)
  .map((action: any) => {
    this.routingService.pushRootPage(DashboardPage);
    return new SpinnerLoadingEndAction();
  });
  
}
