import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'question',
  segment: 'question/:id'
})
@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage {
  
  public action;
  public question;
  
  constructor(public navParams: NavParams) {
    
    this.action = navParams.get('action');
    this.question = navParams.get('question');
  }

  ngOnInit() {
    console.log(this.question);
  }
}
