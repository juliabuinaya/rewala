import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { RoutingService } from '../../core/services/routing.service';
import { QuestionsService } from '../../core/services/questions.service';

import { QuestionsListPage } from '../questions/questions-list/questions-list';
import { QuestionResultsPage } from '../questions/question-results/question-results';

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
  public completedQuestions$;
  public MY_QUESTIONS = 'My Questions';
  public VOICE_GIVEN_QUESTIONS = 'Voice Given Questions';
  public AWAITING_QUESTIONS = 'Awaiting Questions';
  public RESULTS_QUESTIONS = 'Results Questions';
  public PAST_QUESTIONS = 'Past Questions';
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
    this.completedQuestions$ = this.questionsService.completedQuestions$;
  }
  
  toQuestionsList(questionType) {
    this.routingService.pushPage(QuestionsListPage, {questionType});
  }
  
  toQuestionResults() {
    this.routingService.pushPage(QuestionResultsPage);
  }
  
}
