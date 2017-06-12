import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { QuestionsService } from '../../../../../core/services/questions.service';

import * as userRequest from '../../../../user-request/actions/user-request.actions';
import * as myQuestionsGet from '../../my-questions-get/actions/my-questions-get.actions';
import { AwaitingQuestionsGetAction, AwaitingQuestionsGetSuccessAction, AwaitingQuestionsGetFailAction } from '../actions/awaiting-questions-get.actions';


@Injectable()
export class AwaitingQuestionsGetEffects {
  
  constructor(private actions$: Actions, public questionsService: QuestionsService) {
  }
  
  //@Effect()
  //getQuestions$: Observable<Action> = this.actions$
  //.ofType(userRequest.ActionTypes.GET_REQUEST_SUCCESS)
  //.map((action: any) => new AwaitingQuestionsGetAction(action.payload.id));
  //
  //@Effect()
  //getMyQuestionsRequest$: Observable<Action> = this.actions$
  //.ofType(myQuestionsGet.ActionTypes.REQUEST)
  //.map(toPayload)
  //.switchMap((payload: any) => {
  //  return this.questionsService.getMyQuestionsRequest(payload)
  //  .map((res: any) => new AwaitingQuestionsGetSuccessAction(res))
  //  .catch(error => Observable.of(new AwaitingQuestionsGetFailAction(error)));
  //});
  
}
