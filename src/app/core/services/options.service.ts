import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppState } from '../../ngrx/state/app.state';

//actions
import * as optionsRequest from '../../ngrx/options-request/actions/index';

//getters
import * as optionsStateGetter from '../../ngrx/options/states/options-getter.state';


@Injectable()
export class OptionsService {
  
  public currentOptions$: Observable<any>;
  
  constructor(public store: Store<IAppState>, public restangular: Restangular) {
    this.currentOptions$ = this.store.select(optionsStateGetter.getOptionsCurrentEntitiesState);
  }
  
  createQuestionOptions(data) {
    this.store.dispatch(new optionsRequest.OptionsPostAction(data));
  }
  
  createQuestionOptionsRequest(payload: any) {
    return this.restangular.all('questionOptions').customPOST(payload, 'post-multiple-options');
  }
  
  getQuestionOptions(questionId) {
    this.store.dispatch(new optionsRequest.OptionsGetAction(questionId));
  }
  
  getQuestionOptionsRequest(questionId) {
    return this.restangular.one('questions', questionId).all('questionOptions').getList();
  }
  
}