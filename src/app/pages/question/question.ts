import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { OptionsService } from '../../core/services/options.service';
import { QuestionsService } from '../../core/services/questions.service';

import * as _ from 'lodash';

@IonicPage({
  name: 'question',
})
@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage {
  
  public action;
  public question;
  public questionTypes;
  public optionType;
  public deadline;
  public currentOptions$;
  public optionsRequestGetLoadedState$;
  public optionsResolver;
  
  constructor(public navParams: NavParams,
              public optionsService: OptionsService,
              public questionsService: QuestionsService) {
    
    this.action = navParams.get('action');
    this.question = navParams.get('question');
    this.optionsService.getQuestionOptions(this.question.id);
    this.optionsRequestGetLoadedState$ = this.optionsService.optionsRequestGetLoadedState$;
    
    this.optionsResolver = this.optionsRequestGetLoadedState$
    .skipWhile(loaded => !loaded)
    .take(1)
    .toPromise();
  
  }
  
  ionViewCanEnter() {
    return this.optionsResolver.then(loaded => loaded);
  }

  ngOnInit() {
    console.log(this.question);
    this.deadline = new Date(new Date(this.question.createdAt).getTime() + this.question.ttl*1000);
    this.currentOptions$ = this.optionsService.currentOptions$;
    this.questionTypes = this.questionsService.questionTypes;
    this.optionType = _.find(this.questionTypes, ['id', this.question.questionTypeId]);
  }
  
  ngOnDestroy() {
  }
}
