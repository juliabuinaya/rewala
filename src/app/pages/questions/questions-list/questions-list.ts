import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { RoutingService } from '../../../core/services/routing.service';
import { QuestionsService } from '../../../core/services/questions.service';
import { LoadingService } from '../../../core/services/loading.service';

import { QuestionPage } from '../question/question';
import { QuestionResultsPage } from '../question-results/question-results';


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
  public currentPageName;

  constructor(public navParams: NavParams,
              public routingService: RoutingService,
              public questionsService: QuestionsService,
              public loadingService: LoadingService) {
  
      this.questionType = navParams.get('questionType');
    
  }
  
  ionViewWillEnter() {
    this.questionType = this.navParams.get('questionType');
    this.currentPageName = this.constructor.name;
  }

  ngOnInit() {
    switch(this.questionType) {
      case 'My Questions':
        this.questionList$ = this.questionsService.myQuestions$;
        break;
  
      case 'Voice Given Questions':
        this.questionList$ = this.questionsService.voiceGivenQuestions$;
        break;
  
      case 'Awaiting Questions':
        this.questionList$ = this.questionsService.awaitingQuestions$;
        break;
        
      case 'Results Questions':
        this.questionList$ = this.questionsService.completedQuestions$;
        break;
  
      case 'Past Questions':
        this.questionList$ = this.questionsService.pastQuestions$;
        break;
        
      default:
        this.questionList$ = Observable.of([]);
        break;
    }
  }
  
  toQuestionPage(question, questionType, action) {
    this.loadingService.showSpinner();
    questionType === 'Results Questions' || questionType === 'Past Questions' ?
    this.routingService.pushPage(QuestionResultsPage, {question}) :
    this.routingService.pushPage(QuestionPage, {question, questionType, action});
  }
  
}
