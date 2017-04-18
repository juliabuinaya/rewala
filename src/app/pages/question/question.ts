import { Component, Input } from '@angular/core';
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
  
  action: string;
  resultsType: string;
  id: string;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    
    this.action = navParams.get('action');
    this.resultsType = navParams.get('resultsType');
    this.id = navParams.get('id');
  }

  ngOnInit() {
    
  }
}
