import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { ResultsService } from '../../../core/services/results.service';

//actions
import * as resultsRequest from '../actions/results-request.actions';
import { ResultsGetFailAction, ResultsGetSuccessAction } from '../actions/results-request.actions';


@Injectable()
export class ResultsRequestEffects {
  
  constructor(private actions$: Actions,
              public resultsService: ResultsService) {
  }
  
  @Effect()
  resultsGetRequest$: Observable<Action> = this.actions$
  .ofType(resultsRequest.ActionTypes.GET_REQUEST)
  .map(toPayload)
  .switchMap((payload: any) => {
    return this.resultsService.getQuestionResultsRequest(payload)
    .map((res: any) => new ResultsGetSuccessAction(res.data))
    .catch(error => Observable.of(new ResultsGetFailAction(error)));
  });

}
