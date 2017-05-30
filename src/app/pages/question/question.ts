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
  public deadline;
  
  constructor(public navParams: NavParams) {
    
    this.action = navParams.get('action');
    this.question = navParams.get('question');
  }

  ngOnInit() {
    console.log(this.question);
    console.log(new Date(this.question.createdAt).getTime());
    this.deadline = new Date(new Date(this.question.createdAt).getTime() + this.question.ttl*1000);
    console.log(this.deadline);
  }
}
