import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { QuestionsService } from '../../../../../core/services/questions.service';
import { RoutingService } from '../../../../../core/services/routing.service';

//actions
import * as questionDelete from '../actions/question-delete.actions';
import { SpinnerLoadingStartAction, SpinnerLoadingEndAction } from '../../../../spinner/actions/spinner.actions';
import { QuestionDeleteFailAction, QuestionDeleteSuccessAction } from '../actions/question-delete.actions';

@Injectable()
export class QuestionDeleteEffects {

  constructor(private actions$: Actions,
              public questionsService: QuestionsService,
              public routingService: RoutingService) {
  }

  @Effect()
  questionDelete$: Observable<Action> = this.actions$
  .ofType(questionDelete.ActionTypes.REQUEST)
  .map(toPayload)
  .switchMap((payload: any) => {
    return this.questionsService.deleteQuestionRequest(payload)
    .map((res: any) => new QuestionDeleteSuccessAction(payload))
    .catch(error => Observable.of(new QuestionDeleteFailAction(error)));
  });

  @Effect()
  spinnerStart$: Observable<Action> = this.actions$
  .ofType(questionDelete.ActionTypes.REQUEST)
  .map((action: any) => {
    return new SpinnerLoadingStartAction();
  });

  @Effect()
  spinnerEnd$: Observable<Action> = this.actions$
  .ofType(questionDelete.ActionTypes.REQUEST_FAIL)
  .map((action: any) => {
    return new SpinnerLoadingEndAction();
  });

}
