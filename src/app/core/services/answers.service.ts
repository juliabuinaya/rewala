import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as _ from 'lodash';

import { IAppState } from '../../ngrx/state/app.state';
//actions
import * as answersRequest from '../../ngrx/answers-request/actions/index';
//getters
import * as answersStateGetter from '../../ngrx/answers/states/answers-getter.state';


@Injectable()
export class AnswersService {
  
  public myAnswers$: Observable<any>;
  
  constructor(public store: Store<IAppState>,
              public restangular: Restangular) {
    this.myAnswers$ = this.store.select(answersStateGetter.getAnswersMyEntitiesState);
  }
  
  createAnswer(clientId, optionsIds) {
    _.forEach(optionsIds, optionId => {
      let payload: any = {
        clientId,
        questionOptionId: optionId,
      };
      this.store.dispatch(new answersRequest.AnswerPostAction(payload));
    });
  }
  
  createAnswerRequest(payload: any) {
    return this.restangular.all('answers').post(payload);
  }
  
  getMyAnswers(clientId) {
    this.store.dispatch(new answersRequest.MyAnswersGetAction(clientId));
  }
  
  getMyAnswersRequest(clientId) {
    return this.restangular.one('clients', clientId).all('answers').getList();
  }
  
}