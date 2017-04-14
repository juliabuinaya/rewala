import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { QuestionSettingsPage } from '../create-question/question-settings/question-settings';
import { QuestionPage } from '../question/question';

@IonicPage({
  name: 'dashboard'
})
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  public resultsPages: any;
  public questionListPage = ''; //QuestionListPage;

  constructor(public navCtrl: NavController) {

    this.resultsPages = [
      { title: 'Awaiting your answer', type: 'awaiting-answer' },
      { title: 'Awaiting others', type: 'awaiting-others' },
      { title: 'Public questions', type: 'public' },
      { title: 'Past questions', type: 'past' }
    ];
  }

  toAddQuestion() {
    this.navCtrl.push(QuestionSettingsPage);
    // this.navCtrl.push('add-question');
  }
  
  toResults(pageType) {
    console.log('Results page type', pageType);
  }
  
}
