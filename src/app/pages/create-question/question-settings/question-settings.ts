import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'add-question'
})
@Component({
  selector: 'page-question-settings',
  templateUrl: 'question-settings.html'
})
export class QuestionSettingsPage {

  constructor(public navCtrl: NavController) {

  }

}
