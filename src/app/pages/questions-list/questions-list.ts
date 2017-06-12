import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { RoutingService } from '../../core/services/routing.service';
import { QuestionsService } from '../../core/services/questions.service';
import { SpinnerService } from '../../core/services/spinner.service';

import { QuestionPage } from '../question/question';


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
  public ACTION_DETAILS = 'Action Details';
  public ACTION_RECAST = 'Action Recast';

  constructor(public navParams: NavParams,
              public routingService: RoutingService,
              public questionsService: QuestionsService,
              public spinnerService: SpinnerService) {
    
    this.questionType = navParams.get('questionType');
    
  }

  ngOnInit() {
    switch(this.questionType) {
      case 'My Questions':
        this.questionList$ = this.questionsService.myQuestions$;
        break;
  
      case 'Voice given questions':
        //this.questionList$ =
        break;
  
      case 'Awaiting Questions':
        this.questionList$ = this.questionsService.awaitingQuestions$;
        break;
        
      default:
        this.questionList$ = [];
        break;
    }
  }
  
  toQuestionPage(question, questionType, action) {
    this.spinnerService.showSpinner();
    this.routingService.pushPage(QuestionPage, {question, questionType, action});
  }
  
}
