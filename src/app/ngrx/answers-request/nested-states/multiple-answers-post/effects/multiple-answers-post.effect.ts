import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { AnswersService } from '../../../../../core/services/answers.service';
import { RoutingService } from '../../../../../core/services/routing.service';

//actions
import * as multipleAnswersPost from '../actions/multiple-answers-post.actions';
import { MultipleAnswersPostFailAction, MultipleAnswersPostSuccessAction } from '../actions/multiple-answers-post.actions';
import { SpinnerLoadingEndAction, SpinnerLoadingStartAction } from '../../../../spinner/actions/spinner.actions';


@Injectable()
export class MultipleAnswersPostEffects {
  
  constructor(private actions$: Actions,
              public answersService: AnswersService,
              public routingService: RoutingService) {
  }
  
  @Effect()
  multipleAnswersPost$: Observable<Action> = this.actions$
  .ofType(multipleAnswersPost.ActionTypes.REQUEST)
  .map(toPayload)
  .switchMap((payload: any) => {
    let multipleReq$ = payload.questionOptionId.map(optionId => {
      let reqData = {
        clientId: payload.clientId,
        questionOptionId: optionId
      };
      return this.answersService.createAnswerRequest(reqData);
    });
    return Observable.zip(...multipleReq$)
    .map((res: any) => new MultipleAnswersPostSuccessAction(res))
    .catch(error => Observable.of(new MultipleAnswersPostFailAction(error)));
  });

  @Effect()
  spinnerStart$: Observable<Action> = this.actions$
  .ofType(multipleAnswersPost.ActionTypes.REQUEST)
  .map((action: any) => new SpinnerLoadingStartAction());

  @Effect()
  spinnerEnd$: Observable<Action> = this.actions$
  .ofType(multipleAnswersPost.ActionTypes.REQUEST_FAIL)
  .map((action: any) => new SpinnerLoadingEndAction());

  @Effect()
  successRedirect$: Observable<Action> = this.actions$
  .ofType(multipleAnswersPost.ActionTypes.REQUEST_SUCCESS)
  .map((action: any) => {
    this.routingService.popPage();
    return new SpinnerLoadingEndAction();
  });
  
}
