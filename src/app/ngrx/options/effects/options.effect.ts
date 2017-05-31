import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

//actions
import * as optionsGet from '../../options-request/nested-states/options-get/actions/options-get.actions';
import { SetCurrentOptionsAction } from '../actions/options.actions';


@Injectable()
export class OptionsEffects {
  
  constructor(private actions$: Actions) {
  }
  //
  @Effect()
  setCurrentOptions$: Observable<Action> = this.actions$
  .ofType(optionsGet.ActionTypes.REQUEST_SUCCESS)
  .map(action => new SetCurrentOptionsAction(toPayload(action)));
  
  //@Effect()
  //updateMyQuestions$: Observable<Action> = this.actions$
  //.ofType(questionPost.ActionTypes.REQUEST_SUCCESS)
  //.map(action => new UpdateMyQuestionsAction(toPayload(action)));
  
}
