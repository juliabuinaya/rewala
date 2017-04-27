import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { ResultsPage } from '../results/results';
import { RoutingService } from '../../core/services/routing.service';
import { CreateQuestionSettingsPage } from '../create-question/create-question-settings/create-question-settings';


@IonicPage({
  name: 'dashboard'
})
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  
  resultsPages: any;
  

  constructor(public routingService: RoutingService) {
  }
  
  ngOnInit() {
  
    this.resultsPages = [
      { title: 'Awaiting your answer', type: 'awaiting-your-answer' },
      { title: 'Awaiting others', type: 'awaiting-others' },
      { title: 'Public questions', type: 'public questions' },
      { title: 'Past questions', type: 'past questions' }
    ];
  }

  toCreateQuestion() {
    this.routingService.pushPage(CreateQuestionSettingsPage);
  }
  
  toResults(resultsType) {
    this.routingService.pushPage(ResultsPage, {resultsType});
  }
  
}
