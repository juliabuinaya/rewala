import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { OptionsService } from './options.service';

import * as _ from 'lodash';

import { IAppState } from '../../ngrx/state/app.state';
//actions
import * as questionsRequest from '../../ngrx/questions-request/actions/index';
//getters
import * as questionsStateGetter from '../../ngrx/questions/states/questions-getter.state';


@Injectable()
export class QuestionsService {
  
  public myQuestions$: Observable<any>;
  public options;
  public questionTypes = [
    {
      id: "507f1f77bcf86cd799439100",
      multiple: false
    },
    {
      id: "507f1f77bcf86cd799439101",
      multiple: true
    }
  ];
  
  constructor(public store: Store<IAppState>,
              public restangular: Restangular,
              public optionsService: OptionsService) {
    
    this.myQuestions$ = this.store.select(questionsStateGetter.getQuestionsMyEntitiesState);
  
  }
  
  createQuestion(data) {
    this.options = data.options;
    let nowDate: any = new Date();
    let deadlineDate: any = new Date(new Date(data.deadline));
    let ttl = Math.floor((deadlineDate - nowDate)/1000);
    let questionTypeId = (_.find(this.questionTypes, ['multiple', data.multiple])).id;
    
    let questionData: any = {
      text: data.text,
      clientId: data.clientId,
      ttl: ttl,
      groupId: data.groupId,
      questionTypeId: questionTypeId
    };
    
    this.store.dispatch(new questionsRequest.QuestionPostAction(questionData));
  }
  
  createQuestionRequest(payload: any) {
    return this.restangular.all('questions').post(payload)
    .do(question => {
      let payload = this.options.map(option => {
        option.questionId = question.id;
        return option;
      });
      this.optionsService.createQuestionOptions(payload);
    });
  }
  
  getMyQuestions() {
    this.store.dispatch(new questionsRequest.MyQuestionsGetAction());
  }
  
  getMyQuestionsRequest(clientId) {
    return this.restangular.one('clients', clientId).all('questions').getList();
  }
  
}