import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { QuestionsService } from '../../../../../core/services/questions.service';

import * as userRequest from '../../../../user-request/actions/user-request.actions';
import * as awaitingQuestionsGet from '../../awaiting-questions-get/actions/awaiting-questions-get.actions';
import { VoiceGivenQuestionsGetAction, VoiceGivenQuestionsGetSuccessAction, VoiceGivenQuestionsGetFailAction } from '../actions/voice-given-questions-get.actions';


@Injectable()
export class VoiceGivenQuestionsGetEffects {
  
  constructor(private actions$: Actions, public questionsService: QuestionsService) {
  }
  
  @Effect()
  getVoiceGivenQuestions$: Observable<Action> = this.actions$
  .ofType(userRequest.ActionTypes.GET_REQUEST_SUCCESS)
  .map((action: any) => new VoiceGivenQuestionsGetAction());

  @Effect()
  getVoiceGivenQuestionsRequest$: Observable<Action> = this.actions$
  .ofType(awaitingQuestionsGet.ActionTypes.REQUEST)
  .switchMap((action: any) => {
    return this.questionsService.getVoiceGivenQuestionsRequest()
    .map((res: any) => new VoiceGivenQuestionsGetSuccessAction(res.data))
    .catch(error => Observable.of(new VoiceGivenQuestionsGetFailAction(error)));
  });
  
}
