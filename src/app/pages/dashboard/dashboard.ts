import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { QuestionSettingsPage } from '../create-question/question-settings/question-settings';
import { ResultsPage } from '../results/results';


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
