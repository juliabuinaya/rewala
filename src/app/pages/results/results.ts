import { Component } from '@angular/core';
import { NavParams, IonicPage, NavController } from 'ionic-angular';
import { QuestionPage } from '../question/question';


@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})
export class ResultsPage {
  
  resultsType: string;
  questions;

  constructor(public navParams: NavParams,
              public navCtrl: NavController) {
    
    this.resultsType = navParams.get('resultsType');
    
    this.questions = [
      { id: '111', text: 'Which dog should be the new office dog?' },
      { id: '222', text: 'What name should be the new office dog?' },
      { id: '333', text: 'What\'s going on?' }
    ];
  }
  
  ngOnInit() {
  }
  
  toQuestionPage(resultsType, id, action) {
    this.navCtrl.push(QuestionPage, {resultsType, id, action});
  }
}
