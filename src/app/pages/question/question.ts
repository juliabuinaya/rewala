import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { OptionsService } from '../../core/services/options.service';
import { QuestionsService } from '../../core/services/questions.service';
import { SpinnerService } from '../../core/services/spinner.service';
import { AnswersService } from '../../core/services/answers.service';

import * as _ from 'lodash';
import { UserService } from '../../core/services/user.service';

@IonicPage({
  name: 'question',
})
@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage {
  
  public question;
  public questionType;
  public action;
  public questionTypes;
  public optionType;
  public checkedOptions = [];
  public checkedOptionsIds = [];
  public selectedOptionId;
  public deadline;
  public currentOptions$;
  public optionsRequestGetLoadedState$;
  public optionsResolver;
  public userId$;
  public userIdSubscriber;
  public userId;
  
  constructor(public navParams: NavParams,
              public optionsService: OptionsService,
              public questionsService: QuestionsService,
              public answersService: AnswersService,
              public userService: UserService,
              public spinnerService: SpinnerService) {
    
    this.question = navParams.get('question');
    this.questionType = navParams.get('questionType');
    this.action = navParams.get('action');
    this.optionsService.getQuestionOptions(this.question.id);
    this.optionsRequestGetLoadedState$ = this.optionsService.optionsRequestGetLoadedState$;
    
    this.optionsResolver = this.optionsRequestGetLoadedState$
    .skipWhile(loaded => !loaded)
    .take(1)
    .toPromise();
  
    this.userId$ = this.userService.userId$;
    this.userIdSubscriber =  this.userId$
    .subscribe(id => this.userId = id);
  
  }
  
  ionViewCanEnter() {
    return this.optionsResolver.then(loaded => loaded);
  }

  ngOnInit() {
    this.spinnerService.hideSpinner();
    this.deadline = new Date(new Date(this.question.createdAt).getTime() + this.question.ttl*1000);
    this.currentOptions$ = this.optionsService.currentOptions$;
    this.questionTypes = this.questionsService.questionTypes;
    this.optionType = _.find(this.questionTypes, ['id', this.question.questionTypeId]);
    
  }
  
  onOptionChange() {
    this.checkedOptionsIds = _.keys(_.pickBy(this.checkedOptions));
  }
  
  onOptionSelect(option) {
    this.selectedOptionId = option.id;
  }
 
  vote() {
    let optionsIds;
    console.log(this.userId);
    this.selectedOptionId ? optionsIds = [this.selectedOptionId] : optionsIds = this.checkedOptionsIds;
    if(optionsIds.length) this.answersService.createAnswer(this.userId, optionsIds);
  }
 
  ngOnDestroy() {
  }
}
