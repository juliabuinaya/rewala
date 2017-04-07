import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { QuestionSettingsPage } from '../create-question/question-settings/question-settings';

@IonicPage({
  name: 'dashboard'
})
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  public listPages: any;
  public questionListPage = ''; //QuestionListPage;

  constructor(public navCtrl: NavController) {

    this.listPages = [
      { title: 'Awaiting your answer', type: 'awaiting-answer' },
      { title: 'Awaiting others', type: 'awaiting-others' },
      { title: 'Public questions', type: 'public' }
    ];
  }

  addQuestion() {
    this.navCtrl.push(QuestionSettingsPage);
    // this.navCtrl.push('add-question');
  }

}
