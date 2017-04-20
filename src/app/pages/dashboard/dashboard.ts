import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { QuestionSettingsPage } from '../create-question/question-settings/question-settings';
import { ResultsPage } from '../results/results';
import { Store } from '@ngrx/store';
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
  

  constructor(public navCtrl: NavController, public store: Store<IAppState>) {
    this.token$ = this.store.select(authStateGetter.getTokenFromState);
  }
  
  ngOnInit() {
  
    //this.token$.subscribe(token => console.log(token));
    
    this.resultsPages = [
      { title: 'Awaiting your answer', type: 'awaiting-your-answer' },
      { title: 'Awaiting others', type: 'awaiting-others' },
      { title: 'Public questions', type: 'public questions' },
      { title: 'Past questions', type: 'past questions' }
    ];
  }

  toAddQuestion() {
    this.navCtrl.push(QuestionSettingsPage);
  }
  
  toResults(resultsType) {
    this.navCtrl.push(ResultsPage, {resultsType});
  }
  
}
