import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import * as _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-question-results',
  templateUrl: 'question-results.html'
})
export class QuestionResultsPage {
  
  public results;
  public optimalChoice;
  
  constructor() {
  }
  
  ngOnInit() {
    this.results =
      [
        {
          text: 'Vodka',
          quantity: 2
        },
        {
          text: 'Jin',
          quantity: 5
        },
        {
          text: 'Whisky',
          quantity: 7
        },
        {
          text: 'Rum',
          quantity: 3
        },
        {
          text: 'Tequila',
          quantity: 4
        }
      ];
     
    this.optimalChoice = _.maxBy(this.results, 'quantity');
    
  }

}
