import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

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
    let payload: any = {
      clientId
    };
    if(optionsIds.length === 1) {
      payload = {
        ...payload,
        questionOptionId: optionsIds[0],
      };
      this.store.dispatch(new answersRequest.AnswerPostAction(payload));
    } else if(optionsIds.length > 1) {
      payload = {
        ...payload,
        questionOptionId: optionsIds,
      };
      this.store.dispatch(new answersRequest.MultipleAnswersPostAction(payload));
    }
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
  
  changeAnswer(answersIds, optionsIds) {
    console.log('change aaa', answersIds);
    console.log('change opts', optionsIds);
  }
  
  deleteAnswerRequest(answersIds) {
    console.log('deleteAnswerRequest', answersIds);
  }
  
}