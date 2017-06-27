import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { AnswersService } from '../../../../../core/services/answers.service';
import { RoutingService } from '../../../../../core/services/routing.service';

//actions
import * as answerDelete from '../actions/answer-delete.actions';
import { AnswerDeleteFailAction, AnswerDeleteSuccessAction } from '../actions/answer-delete.actions';
import { SpinnerLoadingEndAction, SpinnerLoadingStartAction } from '../../../../spinner/actions/spinner.actions';


@Injectable()
export class AnswerDeleteEffects {

  constructor(private actions$: Actions,
              public answersService: AnswersService,
              public routingService: RoutingService) {
  }

  @Effect()
  answerPost$: Observable<Action> = this.actions$
  .ofType(answerDelete.ActionTypes.REQUEST)
  .map(toPayload)
  .switchMap((payload: any) => {
    return this.answersService.deleteAnswerRequest(payload)
    .map((res: any) => new AnswerDeleteFailAction(res))
    .catch(error => Observable.of(new AnswerDeleteSuccessAction(error)));
  });

  @Effect()
  spinnerStart$: Observable<Action> = this.actions$
  .ofType(answerDelete.ActionTypes.REQUEST)
  .map((action: any) => new SpinnerLoadingStartAction());

  @Effect()
  spinnerEnd$: Observable<Action> = this.actions$
  .ofType(answerDelete.ActionTypes.REQUEST_SUCCESS,
    answerDelete.ActionTypes.REQUEST_FAIL)
  .map((action: any) => new SpinnerLoadingEndAction());
  
}
