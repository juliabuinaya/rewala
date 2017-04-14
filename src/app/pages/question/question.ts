import { Component, Input } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'question',
  segment: 'question/:id'
})
@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage {
  
  @Input() pageType;

  constructor(public navCtrl: NavController) {
  }

}
