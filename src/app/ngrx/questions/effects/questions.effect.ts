import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { RoutingService } from '../../../core/services/routing.service';
import { AlertService } from '../../../core/services/alert.service';

//actions
import * as myQuestionsGet from '../../questions-request/nested-states/my-questions-get/actions/my-questions-get.actions';
import * as awaitingQuestionsGet from '../../questions-request/nested-states/awaiting-questions-get/actions/awaiting-questions-get.actions';
import * as voiceGivenQuestionsGet from '../../questions-request/nested-states/voice-given-questions-get/actions/voice-given-questions-get.actions';
import * as questionPost from '../../questions-request/nested-states/question-post/actions/question-post.actions';
import * as questionDelete from '../../questions-request/nested-states/question-delete/actions/question-delete.actions';
import { SpinnerLoadingEndAction } from '../../spinner/actions/spinner.actions';
import {
  DeleteQuestionAction,
  SetAwaitingQuestionsAction,
  SetMyQuestionsAction,
  SetVoiceGivenQuestionsAction,
  UpdateMyQuestionsAction
} from '../actions/questions.actions';


@Injectable()
export class QuestionsEffects {
  
  constructor(private actions$: Actions,
              public routingService: RoutingService,
              public alertService: AlertService) {
  }
  
  @Effect()
  setMyQuestions$: Observable<Action> = this.actions$
  .ofType(myQuestionsGet.ActionTypes.REQUEST_SUCCESS)
  .map(action => new SetMyQuestionsAction(toPayload(action)));
  
  @Effect()
  setAwaitingQuestions$: Observable<Action> = this.actions$
  .ofType(awaitingQuestionsGet.ActionTypes.REQUEST_SUCCESS)
  .map(action => new SetAwaitingQuestionsAction(toPayload(action)));
  
  @Effect()
  updateMyQuestions$: Observable<Action> = this.actions$
  .ofType(questionPost.ActionTypes.REQUEST_SUCCESS)
  .map(action => new UpdateMyQuestionsAction(toPayload(action)));
  
  @Effect()
  setVoiceGivenQuestions$: Observable<Action> = this.actions$
  .ofType(voiceGivenQuestionsGet.ActionTypes.REQUEST_SUCCESS)
  .map(action => new SetVoiceGivenQuestionsAction(toPayload(action)));
  
  @Effect()
  deleteQuestion: Observable<Action> = this.actions$
  .ofType(questionDelete.ActionTypes.REQUEST_SUCCESS)
  .map(action => new DeleteQuestionAction(toPayload(action)));
  
  @Effect({dispatch: false})
  deleteQuestionRedirect$: Observable<Action> = this.actions$
  .ofType(questionDelete.ActionTypes.REQUEST_SUCCESS)
  .do((action: any) => {
    let ms = 1500;
    this.alertService.showSuccessDeleteQuestionAlert(ms);
    this.routingService.popPage();
  });
  
}
