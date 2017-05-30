import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { RoutingService } from '../../core/services/routing.service';
import { QuestionPage } from '../question/question';

import { IAppState } from '../../ngrx/state/app.state';
//getters
import * as questionsStateGetter from '../../ngrx/questions/states/questions-getter.state';


@IonicPage({
  name: 'questions-list',
})
@Component({
  selector: 'page-questions-list',
  templateUrl: 'questions-list.html'
})
export class QuestionsListPage {
  
  public questionType;
  public questionList$;

  constructor(public navParams: NavParams,
              public store: Store<IAppState>,
              public routingService: RoutingService) {
    
    this.questionType = navParams.get('questionType');
    console.log(this.questionType);
  }

  ngOnInit() {
    switch(this.questionType) {
      case 'My questions':
        this.questionList$ = this.store.select(questionsStateGetter.getQuestionsMyEntitiesState);
        break;
  
      case 'Voice given questions':
        //this.questionList$ = this.store.select(questionsStateGetter.getQuestionsMyEntitiesState);
        break;
  
      case 'Awaiting answer questions':
        //this.questionList$ = this.store.select(questionsStateGetter.getQuestionsMyEntitiesState);
        break;
        
      default:
        this.questionList$ = this.store.select(questionsStateGetter.getQuestionsMyEntitiesState);
        break;
    }
  }
  
  toQuestionPage(question, action) {
    this.routingService.pushPage(QuestionPage, {question, action});
  }
  
}
