import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { AnswersService } from '../../../../../core/services/answers.service';

//actions
import * as answerPost from '../actions/answer-post.actions';
import { AnswerPostFailAction, AnswerPostSuccessAction } from '../actions/answer-post.actions';


@Injectable()
export class AnswerPostEffects {
  
  constructor(private actions$: Actions,
              public answersService: AnswersService) {
  }
  
  @Effect()
  answerPost$: Observable<Action> = this.actions$
  .ofType(answerPost.ActionTypes.REQUEST)
  .map(toPayload)
  .switchMap((payload: any) => {
    debugger;
    return this.answersService.createAnswerRequest(payload)
    .map((res: any) => new AnswerPostSuccessAction(res))
    .catch(error => Observable.of(new AnswerPostFailAction(error)));
  });
  
}
