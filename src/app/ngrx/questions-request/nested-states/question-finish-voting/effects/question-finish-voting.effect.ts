import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { QuestionsService } from '../../../../../core/services/questions.service';
import { RoutingService } from '../../../../../core/services/routing.service';

//actions
import * as questionFinishVoting from '../actions/question-finish-voting.actions';
import { SpinnerLoadingStartAction, SpinnerLoadingEndAction } from '../../../../spinner/actions/spinner.actions';
import {
  QuestionFinishVotingAction, QuestionFinishVotingFailAction,
  QuestionFinishVotingSuccessAction
} from '../actions/question-finish-voting.actions';

@Injectable()
export class QuestionFinishVotingEffects {
  
  constructor(private actions$: Actions,
              public questionsService: QuestionsService,
              public routingService: RoutingService) {
  }
  
  @Effect()
  questionFinishVoting$: Observable<Action> = this.actions$
  .ofType(questionFinishVoting.ActionTypes.REQUEST)
  .map(toPayload)
  .switchMap((payload: any) => {
    return this.questionsService.questionFinishVotingRequest(payload)
    .map((res: any) => new QuestionFinishVotingSuccessAction(res))
    .catch(error => Observable.of(new QuestionFinishVotingFailAction(error)));
  });

  @Effect()
  spinnerStart$: Observable<Action> = this.actions$
  .ofType(questionFinishVoting.ActionTypes.REQUEST)
  .map((action: any) => new SpinnerLoadingStartAction());

  @Effect()
  spinnerEnd$: Observable<Action> = this.actions$
  .ofType(
    questionFinishVoting.ActionTypes.REQUEST_SUCCESS,
    questionFinishVoting.ActionTypes.REQUEST_FAIL
  )
  .map((action: any) => new SpinnerLoadingEndAction());
  
}
