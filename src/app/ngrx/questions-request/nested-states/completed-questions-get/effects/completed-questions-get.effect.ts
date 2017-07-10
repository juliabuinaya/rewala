import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { QuestionsService } from '../../../../../core/services/questions.service';

import * as userRequest from '../../../../user-request/actions/user-request.actions';
import * as awaitingQuestionsGet from '../../awaiting-questions-get/actions/awaiting-questions-get.actions';
import * as answerPost from '../../../../answers-request/nested-states/answer-post/actions/answer-post.actions';
import * as multipleAnswersPost from '../../../../answers-request/nested-states/multiple-answers-post/actions/multiple-answers-post.actions';
import * as questionPost from '../../../../questions-request/nested-states/question-post/actions/question-post.actions';


@Injectable()
export class CompletedQuestionsGetEffects {
  //
  //constructor(private actions$: Actions,
  //            public questionsService: QuestionsService) {
  //}
  //
  //@Effect()
  //getCompletedQuestions$: Observable<Action> = this.actions$
  //.ofType(
  //  userRequest.ActionTypes.GET_REQUEST_SUCCESS,
  //  questionPost.ActionTypes.REQUEST_SUCCESS,
  //  answerPost.ActionTypes.REQUEST_SUCCESS,
  //  multipleAnswersPost.ActionTypes.REQUEST_SUCCESS
  //)
  //.map((action: any) => new CompletedQuestionsGetAction());
  //
  //@Effect()
  //getCompletedQuestionsRequest$: Observable<Action> = this.actions$
  //.ofType(awaitingQuestionsGet.ActionTypes.REQUEST)
  //.switchMap((action: any) => {
  //  return this.questionsService.getCompletedQuestionsRequest()
  //  .map((res: any) => new CompletedQuestionsGetSuccessAction(res.data))
  //  .catch(error => Observable.of(new CompletedQuestionsGetFailAction(error)));
  //});
  //
}
