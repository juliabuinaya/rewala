import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { RoutingService } from '../../../core/services/routing.service';


@IonicPage({
  name: 'create-question-options'
})
@Component({
  selector: 'page-create-question-options',
  templateUrl: 'create-question-options.html'
})
export class CreateQuestionOptionsPage {
  
  questionSettings;
  optionText = '';
  options = [];
  minOptionsQuantity = 2;
  showForm = true;
  
  constructor(public routingService: RoutingService,
              public navParams: NavParams) {
  
    this.questionSettings = navParams.get('questionSettings');
  }
  
  onSubmit(form) {
    if (form.valid) {
      this.options.push(this.optionText);
      this.optionText = '';
    }
  }
  
  toNextStep() {
    this.questionSettings.options = this.options;
    console.log(this.questionSettings);
    //this.routingService.pushPage(CreateQuestionStep5Page);
  }
  
  ngOnDestroy() {
  }
  
}
