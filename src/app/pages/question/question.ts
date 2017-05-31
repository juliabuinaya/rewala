import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { OptionsService } from '../../core/services/options.service';

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
  public deadline;
  
  constructor(public navParams: NavParams,
              public optionsService: OptionsService) {
    this.action = navParams.get('action');
    this.question = navParams.get('question');
  }

  ngOnInit() {
    console.log(this.question);
    this.optionsService.getQuestionOptions(this.question.id);
    this.deadline = new Date(new Date(this.question.createdAt).getTime() + this.question.ttl*1000);
  }
}
