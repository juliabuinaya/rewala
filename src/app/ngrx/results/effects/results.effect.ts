import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

//actions
import * as resultsRequest from '../../results-request/actions/results-request.actions';
import { SetResultsAction } from '../actions/results.actions';


@Injectable()
export class ResultsEffects {
  
  constructor(private actions$: Actions) {
  }
  
  @Effect()
  setCurrentOptions$: Observable<Action> = this.actions$
  .ofType(resultsRequest.ActionTypes.GET_REQUEST_SUCCESS)
  .map(action => new SetResultsAction(toPayload(action)));
  
}
