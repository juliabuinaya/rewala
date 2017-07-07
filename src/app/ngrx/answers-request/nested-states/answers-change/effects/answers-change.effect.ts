import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { AnswersService } from '../../../../../core/services/answers.service';
import { RoutingService } from '../../../../../core/services/routing.service';
import { AlertService } from '../../../../../core/services/alert.service';

//actions
import * as answersChange from '../actions/answers-change.actions';
import * as answerDelete from '../../answer-delete/actions/answer-delete.actions';
import { AnswersChangeSuccessAction, AnswersChangeFailAction } from '../actions/answers-change.actions';
import { SpinnerLoadingEndAction, SpinnerLoadingStartAction } from '../../../../spinner/actions/spinner.actions';

@Injectable()
export class AnswersChangeEffects {
  
  constructor(private actions$: Actions,
              public answersService: AnswersService,
              public routingService: RoutingService,
              public alertService: AlertService) {
  }
  
  @Effect()
  answersChange$: Observable<Action> = this.actions$
  .ofType(answersChange.ActionTypes.REQUEST)
  .map(toPayload)
  .switchMap((payload: any) => {
    let multipleReq$ = payload.answersIds.map(answerId => {
      return this.answersService.deleteAnswerRequest(answerId)
    });
    return Observable.zip(...multipleReq$)
    .mapTo(payload)
  })
  .switchMap((payload: any) => {
    let multipleReq$ = payload.optionsIds.map(optionId => {
      let reqData = {
        clientId: payload.clientId,
        questionOptionId: optionId
      };
      return this.answersService.createAnswerRequest(reqData)
      //.catch(error => {                       <--- server do not return any data if error, can't catch
      //  debugger;
      //  return Observable.of({error: true, response : error}})
      //});
    });
    return Observable.zip(...multipleReq$)
    .map((res: any) => {
      let result =  {
        deletedAnswersIds: payload.answersIds,
        newAnswers: res
      };
      return new AnswersChangeSuccessAction(result);
    })
  })
  .catch((error) => Observable.of(new AnswersChangeFailAction(error)));
  
  @Effect()
  spinnerStart$: Observable<Action> = this.actions$
  .ofType(answersChange.ActionTypes.REQUEST)
  .map((action: any) => new SpinnerLoadingStartAction());
  
  @Effect()
  spinnerEnd$: Observable<Action> = this.actions$
  .ofType(
    answersChange.ActionTypes.REQUEST_FAIL,
    answerDelete.ActionTypes.REQUEST_FAIL,
    answersChange.ActionTypes.REQUEST_SUCCESS
  )
  .map((action: any) => new SpinnerLoadingEndAction());
  
  @Effect({dispatch: false})
  changeSuccessRedirect$: Observable<Action> = this.actions$
  .ofType(answersChange.ActionTypes.REQUEST_SUCCESS)
  .do((action: any) => {
    this.alertService.showSuccessAlert('Vote has been changed', 1500);
    this.routingService.popPage();
  });
}
