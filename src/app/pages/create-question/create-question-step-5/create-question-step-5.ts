import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { RoutingService } from '../../../core/services/routing.service';
import { CreateQuestionStep6Page } from '../create-question-step-6/create-question-step-6';

@IonicPage({
  name: 'create-question-step-5'
})
@Component({
  selector: 'page-create-question-step-5',
  templateUrl: 'create-question-step-5.html'
})
export class CreateQuestionStep5Page {
  
  nowDate;
  deadlineDate;
  
  constructor(public routingService: RoutingService) {
    this.nowDate = new Date().toISOString();
    this.deadlineDate = this.nowDate;
  }
  
  toNextStep() {
    console.log(this.deadlineDate);
    this.routingService.pushPage(CreateQuestionStep6Page);
  }
  
}
