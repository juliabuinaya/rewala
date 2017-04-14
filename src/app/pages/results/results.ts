import { Component } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';


@IonicPage({
  name: 'results',
})
@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})
export class ResultsPage {

  constructor(public navParams: NavParams) {
  }
  
}
