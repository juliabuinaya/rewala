import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { AnswersService } from '../../../../../core/services/answers.service';

import * as userRequest from '../../../../user-request/actions/user-request.actions';
import * as myAnswersGet from '../../my-answers-get/actions/my-answers-get.actions';
import { MyAnswersGetAction, MyAnswersGetSuccessAction, MyAnswersGetFailAction } from '../actions/my-answers-get.actions';


@Injectable()
export class MyAnswersGetEffects {
  
  constructor(private actions$: Actions,
              public answersService: AnswersService) {
  }
  
  @Effect()
  getMyAnswers$: Observable<Action> = this.actions$
  .ofType(userRequest.ActionTypes.GET_REQUEST_SUCCESS)
  .map((action: any) => {
    return new MyAnswersGetAction(action.payload.id);
  });
  
  @Effect()
  getMyAnswersRequest$: Observable<Action> = this.actions$
  .ofType(myAnswersGet.ActionTypes.REQUEST)
  .map(toPayload)
  .switchMap((payload: any) => {
    return this.answersService.getMyAnswersRequest(payload)
    .map((res: any) => new MyAnswersGetSuccessAction(res))
    .catch(error => Observable.of(new MyAnswersGetFailAction(error)));
  });
  
}
