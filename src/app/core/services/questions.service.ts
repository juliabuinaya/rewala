import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as _ from 'lodash';

import { IAppState } from '../../ngrx/state/app.state';
import * as questionsRequest from '../../ngrx/questions-request/actions/index';

@Injectable()
export class QuestionsService {
  
  private questionTypes = [
    {
      id: "507f1f77bcf86cd799439100",
      multiple: false
    },
    {
      id: "507f1f77bcf86cd799439101",
      multiple: true
    }
  ];
  
  constructor(public store: Store<IAppState>, public restangular: Restangular) {
  }
  
  createQuestion(data) {
    console.log(data);
    
    let nowDate: any = new Date();
    let deadlineDate: any = new Date(new Date(data.deadline));
    let ttl = Math.floor((deadlineDate - nowDate)/1000);
    let questionTypeId = (_.find(this.questionTypes, ['multiple', data.multiple])).id;
    
    let questionData: any = {
      name: data.text,
      text: data.text,
      clientId: data.clientId,
      ttl: ttl,
      groupId: data.groupId,
      questionTypeId: questionTypeId
    };
    
    this.store.dispatch(new questionsRequest.QuestionPostAction(questionData));
  }
  
  createQuestionRequest(payload: any) {
    return this.restangular.all('questions').post(payload);
    //.switchMap(question => {
    //  return question.all('questionOptions').post();
    //});
  }

}