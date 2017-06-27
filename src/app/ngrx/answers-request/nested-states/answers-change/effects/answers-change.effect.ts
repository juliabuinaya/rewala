import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { AnswersService } from '../../../../../core/services/answers.service';

//actions
import * as answersChange from '../actions/answers-change.actions';
import { AnswersChangeFailAction, AnswersChangeSuccessAction } from '../actions/answers-change.actions';
import { SpinnerLoadingStartAction } from '../../../../spinner/actions/spinner.actions';

@Injectable()
export class AnswersChangeEffects {
  
  constructor(private actions$: Actions,
              public answersService: AnswersService) {
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
    .map((res: any) => new AnswersChangeSuccessAction(res)) // must be AnswersDeleteSuccessAction
    .catch(error => Observable.of(new AnswersChangeFailAction(error))); // must be AnswersDeletefailAction
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
  
}
