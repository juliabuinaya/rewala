import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { RoutingService } from '../../core/services/routing.service';

import { ResultsPage } from '../results/results';
import { CreateQuestionSettingsPage } from '../create-question/create-question-settings/create-question-settings';

import { IAppState } from '../../ngrx/state/app.state';
//getters
import * as questionsStateGetter from '../../ngrx/questions/states/questions-getter.state';


@IonicPage({
  name: 'dashboard'
})
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  
  public myQuestions$;
  public resultsPages: any;
  
  constructor(public routingService: RoutingService,
              public store: Store<IAppState>) {
  }
  
  ngOnInit() {
    
    this.resultsPages = [
      { title: 'Awaiting your answer', type: 'awaiting-your-answer' },
      { title: 'Awaiting others', type: 'awaiting-others' },
      { title: 'Public questions', type: 'public questions' },
      { title: 'Past questions', type: 'past questions' }
    ];
  
    this.myQuestions$ = this.store.select(questionsStateGetter.getQuestionsMyEntitiesState);
    //this.myQuestions$.subscribe(res => console.log(res));
  }

  toCreateQuestion() {
    this.routingService.pushPage(CreateQuestionSettingsPage);
  }
  
  toResultsPage(resultsType) {
    this.routingService.pushPage(ResultsPage, {resultsType});
  }
  
}
