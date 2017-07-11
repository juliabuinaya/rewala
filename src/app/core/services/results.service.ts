import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppState } from '../../ngrx/state/app.state';

//actions
import * as resultsRequest from '../../ngrx/results-request/actions/index';

//getters
import * as resultsStateGetter from '../../ngrx/results/states/results-getter.state';
import * as resultsGetStateGetter from '../../ngrx/results-request/states/results-request-getter.state';


@Injectable()
export class ResultsService {
  
  public results$: Observable<any>;
  public resultsRequestGetLoadedState$: Observable<any>;
  
  constructor(public store: Store<IAppState>, public restangular: Restangular) {
    
    this.results$ = this.store.select(resultsStateGetter.getResultsEntitiesState);
    this.resultsRequestGetLoadedState$ = this.store.select(resultsGetStateGetter.getResultsGetLoadedState);
  }
  
  getQuestionResults(questionId) {
    this.store.dispatch(new resultsRequest.ResultsGetAction(questionId));
  }
  
  getQuestionResultsRequest(questionId) {
    return this.restangular.one('questions', questionId).one('get-results').get();
  }
  
}