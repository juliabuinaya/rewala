import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { QuestionsService } from '../../../../../core/services/questions.service';

import * as userRequest from '../../../../user-request/actions/user-request.actions';
import * as pastQuestionsGet from '../../past-questions-get/actions/past-questions-get.actions';
import {
  PastQuestionsGetAction,
  PastQuestionsGetFailAction,
  PastQuestionsGetSuccessAction
} from '../actions/past-questions-get.actions';


@Injectable()
export class PastQuestionsGetEffects {

  constructor(private actions$: Actions,
              public questionsService: QuestionsService) {
  }
  
  @Effect()
  getPastQuestions$: Observable<Action> = this.actions$
  .ofType(userRequest.ActionTypes.GET_REQUEST_SUCCESS)
  .map((action: any) => new PastQuestionsGetAction());

  @Effect()
  getPastQuestionsRequest$: Observable<Action> = this.actions$
  .ofType(pastQuestionsGet.ActionTypes.REQUEST)
  .switchMap((action: any) => {
    return this.questionsService.getPastQuestionsRequest()
    .map((res: any) => new PastQuestionsGetSuccessAction(res.data))
    .catch(error => Observable.of(new PastQuestionsGetFailAction(error)));
  });
  
}
