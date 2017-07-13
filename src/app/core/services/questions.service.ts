import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { OptionsService } from './options.service';

import * as _ from 'lodash';

import { IAppState } from '../../ngrx/state/app.state';
//actions
import * as questionsRequest from '../../ngrx/questions-request/actions/index';
import * as questions from '../../ngrx/questions/actions/index';
//getters
import * as questionsStateGetter from '../../ngrx/questions/states/questions-getter.state';


@Injectable()
export class QuestionsService {
  
  public myQuestions$: Observable<any>;
  public awaitingQuestions$: Observable<any>;
  public voiceGivenQuestions$: Observable<any>;
  public completedQuestions$: Observable<any>;
  public pastQuestions$: Observable<any>;
  
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
    this.awaitingQuestions$ = this.store.select(questionsStateGetter.getQuestionsAwaitingEntitiesState);
    this.voiceGivenQuestions$ = this.store.select(questionsStateGetter.getQuestionsVoiceGivenEntitiesState);
    this.completedQuestions$ = this.store.select(questionsStateGetter.getQuestionsCompletedEntitiesState);
    this.pastQuestions$ = this.store.select(questionsStateGetter.getQuestionsPastEntitiesState);
  
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
  
  getMyQuestionsRequest() {
    return this.restangular.all('clients').one('get-questions').get();
  }
  
  getAwaitingQuestions() {
    this.store.dispatch(new questionsRequest.AwaitingQuestionsGetAction());
  }
  
  getAwaitingQuestionsRequest() {
    return this.restangular.all('clients').one('get-awaiting-questions').get();
  }
  
  getVoiceGivenQuestions() {
    this.store.dispatch(new questionsRequest.VoiceGivenQuestionsGetAction());
  }
  
  getVoiceGivenQuestionsRequest() {
    return this.restangular.all('clients').one('get-voice-given-questions').get();
  }
  
  getCompletedQuestions() {
    this.store.dispatch(new questionsRequest.CompletedQuestionsGetAction());
  }
  
  getCompletedQuestionsRequest() {
    return this.restangular.all('clients').one('get-completed-questions').get();
  }
  
  getPastQuestions() {
    this.store.dispatch(new questionsRequest.PastQuestionsGetAction());
  }
  
  getPastQuestionsRequest() {
    return this.restangular.all('clients').one('get-past-questions').get();
  }
  
  deleteQuestion(questionId) {
    this.store.dispatch(new questionsRequest.QuestionDeleteAction(questionId));
  }
  
  deleteQuestionRequest(questionId) {
    return this.restangular.one('questions', questionId).remove();
  }
  
  deadlineFailUpdateQuestions(questionId, questionType) {
    this.store.dispatch(new questions.DeleteQuestionAction(questionId));
    this.store.dispatch(new questions.UpdateCompletedQuestionsIdsAction(questionId));
  }
  
  questionFinishVoting(question) {
    this.store.dispatch(new questionsRequest.QuestionFinishVotingAction(question));
  }
  
  questionFinishVotingRequest(question) {
    let ttl = Math.floor(question.ttl - ((new Date(question.createdAt).getTime() + question.ttl*1000) - new Date().getTime())/1000);
    return this.restangular.one('questions', question.id).patch({ttl});
  }
  
}