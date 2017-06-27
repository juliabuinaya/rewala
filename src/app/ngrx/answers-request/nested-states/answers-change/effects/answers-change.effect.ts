import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { AnswersService } from '../../../../../core/services/answers.service';
import { RoutingService } from '../../../../../core/services/routing.service';

//actions
import * as answersChange from '../actions/answers-change.actions';
import * as answerDelete from '../../answer-delete/actions/answer-delete.actions';
import { AnswersChangeSuccessAction, AnswersChangeFailAction } from '../actions/answers-change.actions';
import { SpinnerLoadingEndAction, SpinnerLoadingStartAction } from '../../../../spinner/actions/spinner.actions';
import { AnswerDeleteFailAction, AnswerDeleteSuccessAction } from '../../answer-delete/actions/answer-delete.actions';

@Injectable()
export class AnswersChangeEffects {
  
  constructor(private actions$: Actions,
              public answersService: AnswersService,
              public routingService: RoutingService) {
  }
  
  @Effect()
  answersChange$: Observable<Action> = this.actions$
  .ofType(answersChange.ActionTypes.REQUEST)
  .map(toPayload)
  .switchMap((payload: any) => {
    let multipleReq$ = payload.answersIds.map(answerId => {
      return this.answersService.deleteAnswerRequest(answerId);
    });
    return Observable.zip(...multipleReq$)
    .mapTo(payload)
    .catch(error => Observable.of(new AnswersChangeFailAction(error)))
  })
  .switchMap((payload: any) => {
    let multipleReq$ = payload.optionsIds.map(optionId => {
      let reqData = {
        clientId: payload.clientId,
        questionOptionId: optionId
      };
      return this.answersService.createAnswerRequest(reqData);
    });
    return Observable.zip(...multipleReq$)
    .map((res: any) => new AnswersChangeSuccessAction(res))
    .catch(error => Observable.of(new AnswersChangeFailAction(error)));
  });
  
  @Effect()
  spinnerStart$: Observable<Action> = this.actions$
  .ofType(answersChange.ActionTypes.REQUEST)
  .map((action: any) => new SpinnerLoadingStartAction());
  
  @Effect()
  spinnerEnd$: Observable<Action> = this.actions$
  .ofType(
    answersChange.ActionTypes.REQUEST_SUCCESS,
    answersChange.ActionTypes.REQUEST_FAIL,
    answerDelete.ActionTypes.REQUEST_SUCCESS,
    answerDelete.ActionTypes.REQUEST_FAIL
  )
  .map((action: any) => new SpinnerLoadingEndAction());
  
  @Effect()
  changeSuccessRedirect$: Observable<Action> = this.actions$
  .ofType(answersChange.ActionTypes.REQUEST_SUCCESS)
  .map((action: any) => {
    this.routingService.popPage();
    return new SpinnerLoadingEndAction();
  });
}
