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

  constructor(public navParams: NavParams,
              public routingService: RoutingService,
              public questionsService: QuestionsService,
              public spinnerService: SpinnerService) {
    
    this.questionType = navParams.get('questionType');
    
  }

  ngOnInit() {
    switch(this.questionType) {
      case 'My questions':
        this.questionList$ = this.questionsService.myQuestions$;
        break;
  
      case 'Voice given questions':
        //this.questionList$ =
        break;
  
      case 'Awaiting answer questions':
        //this.questionList$ =
        break;
        
      default:
        this.questionList$ = this.questionsService.myQuestions$;
        break;
    }
  }
  
  toQuestionPage(question, action) {
    this.spinnerService.showSpinner();
    this.routingService.pushPage(QuestionPage, {question, action});
  }
  
}
