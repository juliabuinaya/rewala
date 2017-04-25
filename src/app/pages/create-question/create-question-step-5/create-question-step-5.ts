import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { RoutingService } from '../../../core/services/routing.service';

@IonicPage({
  name: 'create-question-step-5'
})
@Component({
  selector: 'page-create-question-step-5',
  templateUrl: 'create-question-step-5.html'
})
export class CreateQuestionStep5Page {
  
  deadlineDate;
  
  constructor(public routingService: RoutingService) {
    this.deadlineDate = new Date().toISOString();
  }
  
  toNextStep() {
    console.log(this.deadlineDate);
    //this.routingService.pushPage(CreateQuestionStep6Page);
  }
  
}
