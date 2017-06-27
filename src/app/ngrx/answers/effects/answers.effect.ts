import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

//actions
import * as myAnswersGet from '../../answers-request/nested-states/my-answers-get/actions/my-answers-get.actions';
import * as answerPost from '../../answers-request/nested-states/answer-post/actions/answer-post.actions';
import * as answersChange from '../../answers-request/nested-states/answers-change/actions/answers-change.actions';
import * as multipleAnswersPost from '../../answers-request/nested-states/multiple-answers-post/actions/multiple-answers-post.actions';
import { DeleteMyAnswersAction, SetMyAnswersAction, UpdateMyAnswersAction } from '../actions/answers.actions';

@Injectable()
export class AnswersEffects {
  
  constructor(private actions$: Actions) {
  }
  
  @Effect()
  setMyAnswers$: Observable<Action> = this.actions$
  .ofType(myAnswersGet.ActionTypes.REQUEST_SUCCESS)
  .map(action => new SetMyAnswersAction(toPayload(action)));
  
  
  @Effect()
  updateMyAnswers$: Observable<Action> = this.actions$
  .ofType(
    answerPost.ActionTypes.REQUEST_SUCCESS,
    multipleAnswersPost.ActionTypes.REQUEST_SUCCESS
  )
  .map(action => new UpdateMyAnswersAction(toPayload(action)));
  
  @Effect()
  deleteMyAnswersAfterChangeSuccess$: Observable<Action> = this.actions$
  .ofType(answersChange.ActionTypes.REQUEST_SUCCESS)
  .map(toPayload)
  .map(payload => new DeleteMyAnswersAction(payload.deletedAnswersIds));
  
  @Effect()
  updateMyAnswersAfterChangeSuccess$: Observable<Action> = this.actions$
  .ofType(answersChange.ActionTypes.REQUEST_SUCCESS)
  .map(toPayload)
  .map(payload => new UpdateMyAnswersAction(payload.newAnswers));
  
}
