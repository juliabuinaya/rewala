import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { RoutingService } from '../../core/services/routing.service';
import { QuestionsService } from '../../core/services/questions.service';

import { CreateQuestionSettingsPage } from '../create-question/create-question-settings/create-question-settings';
import { QuestionsListPage } from '../questions/questions-list/questions-list';
import { QuestionResultsPage } from '../questions/question-results/question-results';
import { SettingsPage } from '../settings/settings';
import { CreateQuestionGroupsPage } from '../create-question/create-question-groups/create-question-groups';

@IonicPage({
  name: 'dashboard'
})
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  
  public myQuestions$;
  public awaitingQuestions$;
  public voiceGivenQuestions$;
  public MY_QUESTIONS = 'My Questions';
  public VOICE_GIVEN_QUESTIONS = 'Voice Given Questions';
  public AWAITING_QUESTIONS = 'Awaiting Questions';
  public QUESTIONS_RESULTS = 'Questions Results';
  public currentPageName;
  
  constructor(public routingService: RoutingService,
              public questionsService: QuestionsService) {
  }
  
  ionViewWillEnter() {
    this.currentPageName = this.constructor.name;
  }
  
  ngOnInit() {
    this.myQuestions$ = this.questionsService.myQuestions$;
    this.awaitingQuestions$ = this.questionsService.awaitingQuestions$;
    this.voiceGivenQuestions$ = this.questionsService.voiceGivenQuestions$;
  }

  toCreateQuestion() {
    this.routingService.pushPage(CreateQuestionSettingsPage);
  }
  
  toQuestionsList(questionType) {
    this.routingService.pushPage(QuestionsListPage, {questionType});
  }
  
  toQuestionResults() {
    this.routingService.pushPage(QuestionResultsPage);
  }
  
  toDashboardPage() {
    this.routingService.pushRootPage(DashboardPage);
  }
  
  toSettingsPage() {
    this.routingService.pushPage(SettingsPage);
  }
  
  toGroupsPage() {
    this.routingService.pushPage(CreateQuestionGroupsPage);
  }
}
