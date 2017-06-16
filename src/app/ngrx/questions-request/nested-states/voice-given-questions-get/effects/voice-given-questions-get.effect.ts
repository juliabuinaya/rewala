import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { QuestionsService } from '../../../../../core/services/questions.service';

import * as userRequest from '../../../../user-request/actions/user-request.actions';
import * as voiceGivenQuestionsGet from '../../voice-given-questions-get/actions/voice-given-questions-get.actions';
import * as answerPost from '../../../../answers-request/nested-states/answer-post/actions/answer-post.actions';
import { VoiceGivenQuestionsGetAction, VoiceGivenQuestionsGetSuccessAction, VoiceGivenQuestionsGetFailAction } from '../actions/voice-given-questions-get.actions';


@Injectable()
export class VoiceGivenQuestionsGetEffects {
  
  constructor(private actions$: Actions, public questionsService: QuestionsService) {
  }
  
  @Effect()
  getVoiceGivenQuestions$: Observable<Action> = this.actions$
  .ofType(
    userRequest.ActionTypes.GET_REQUEST_SUCCESS,
    answerPost.ActionTypes.REQUEST_SUCCESS
  )
  .map((action: any) => new VoiceGivenQuestionsGetAction());

  @Effect()
  getVoiceGivenQuestionsRequest$: Observable<Action> = this.actions$
  .ofType(voiceGivenQuestionsGet.ActionTypes.REQUEST)
  .switchMap((action: any) => {
    return this.questionsService.getVoiceGivenQuestionsRequest()
    .map((res: any) => new VoiceGivenQuestionsGetSuccessAction(res.data))
    .catch(error => Observable.of(new VoiceGivenQuestionsGetFailAction(error)));
  });
  
}
