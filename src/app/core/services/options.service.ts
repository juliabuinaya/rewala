import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppState } from '../../ngrx/state/app.state';
import * as optionsRequest from '../../ngrx/options-request/actions/index';

@Injectable()
export class OptionsService {
  
  constructor(public store: Store<IAppState>, public restangular: Restangular) {
  }
  
  createQuestionOptions(data) {
    this.store.dispatch(new optionsRequest.OptionsPostAction(data));
  }
  
  createQuestionOptionsRequest(payload: any) {
    return this.restangular.all('questionOptions').customPOST(payload, 'post-multiple-options');
  }
  
  getQuestionOptions(questionId) {
    //this.store.dispatch(new optionsRequest.OptionsGetAction(questionId));   <--  need to create options state
  }
  
  getQuestionOptionsRequest(questionId) {
    return this.restangular.all('questions', questionId).one('questionOptions').get();
  }
  
}