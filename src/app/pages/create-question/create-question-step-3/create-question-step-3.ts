import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { RoutingService } from '../../../core/services/routing.service';
import { CreateQuestionStep4Page } from '../create-question-step-4/create-question-step-4';
import { CreateQuestionService } from '../../../core/services/create-question.service';

@IonicPage({
  name: 'create-question-step-3'
})
@Component({
  selector: 'page-create-question-step-3',
  templateUrl: 'create-question-step-3.html'
})
export class CreateQuestionStep3Page {
  
  options = [2, 3, 4];
  
  constructor(public routingService: RoutingService,
              public createQuestionService: CreateQuestionService) {
  }
  
  onChoose(option) {
    let payload = {optionsQuantity: option}
    this.createQuestionService.createGroupStepThree(payload);
    this.routingService.pushPage(CreateQuestionStep4Page);
  }

}
