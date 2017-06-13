import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

//actions
import * as myAnswersGet from '../../answers-request/nested-states/my-answers-get/actions/my-answers-get.actions';
import { SetMyAnswersAction } from '../actions/answers.actions';

@Injectable()
export class AnswersEffects {
  
  constructor(private actions$: Actions) {
  }
  
  @Effect()
  setMyAnswers$: Observable<Action> = this.actions$
  .ofType(myAnswersGet.ActionTypes.REQUEST_SUCCESS)
  .map(action => new SetMyAnswersAction(toPayload(action)));
  
}
