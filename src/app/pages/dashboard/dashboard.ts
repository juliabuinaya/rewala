import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { RoutingService } from '../../core/services/routing.service';
import { QuestionsService } from '../../core/services/questions.service';

import { CreateQuestionSettingsPage } from '../create-question/create-question-settings/create-question-settings';
import { QuestionsListPage } from '../questions-list/questions-list';


@IonicPage({
  name: 'dashboard'
})
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  
  public myQuestions$;
  
  constructor(public routingService: RoutingService,
              public questionsService: QuestionsService) {
  }
  
  ngOnInit() {
    this.myQuestions$ = this.questionsService.myQuestions$;
  }

  toCreateQuestion() {
    this.routingService.pushPage(CreateQuestionSettingsPage);
  }
  
  toQuestionsList(questionType) {
    this.routingService.pushPage(QuestionsListPage, {questionType});
  }
}
