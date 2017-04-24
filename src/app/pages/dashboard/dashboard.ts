import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { ResultsPage } from '../results/results';
import { Store } from '@ngrx/store';

import { RoutingService } from '../../core/services/routing.service';

import { IAppState } from '../../ngrx/state/app.state';
import * as authStateGetter from '../../ngrx/auth/states/auth-getter.state';
import { CreateQuestionStep1Page } from '../create-question/create-question-step-1/create-question-step-1';


@IonicPage({
  name: 'dashboard'
})
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  
  resultsPages: any;
  questionListPage = ''; //QuestionListPage;
  token$;
  

  constructor(public store: Store<IAppState>,
              public routingService: RoutingService) {
    
    this.token$ = this.store.select(authStateGetter.getTokenFromState);
  }
  
  ngOnInit() {
  
    this.resultsPages = [
      { title: 'Awaiting your answer', type: 'awaiting-your-answer' },
      { title: 'Awaiting others', type: 'awaiting-others' },
      { title: 'Public questions', type: 'public questions' },
      { title: 'Past questions', type: 'past questions' }
    ];
  }

  toAddQuestion() {
    this.routingService.pushPage(CreateQuestionStep1Page);
  }
  
  toResults(resultsType) {
    this.routingService.pushPage(ResultsPage, {resultsType});
  }
  
}
