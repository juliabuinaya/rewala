import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { QuestionSettingsPage } from '../create-question/question-settings/question-settings';
import { ResultsPage } from '../results/results';
import { Store } from '@ngrx/store';

import { RoutingService } from '../../core/services/routing.service';

import { IAppState } from '../../ngrx/state/app.state';
import * as authStateGetter from '../../ngrx/auth/states/auth-getter.state';


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
    //this.navCtrl.push(QuestionSettingsPage);
    this.routingService.pushPage(QuestionSettingsPage);
  }
  
  toResults(resultsType) {
    //this.navCtrl.push(ResultsPage, {resultsType});
    this.routingService.pushPage(ResultsPage, {resultsType});
  }
  
}
