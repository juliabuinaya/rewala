import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { RoutingService } from '../../../core/services/routing.service';
import { CreateQuestionStep4Page } from '../create-question-step-4/create-question-step-4';

@IonicPage({
  name: 'create-question-step-3'
})
@Component({
  selector: 'page-create-question-step-3',
  templateUrl: 'create-question-step-3.html'
})
export class CreateQuestionStep3Page {
  
  options = [1, 2, 3, 4];
  
  constructor(public routingService: RoutingService) {
  }
  
  onChoose(option) {
    console.log(option);
    
    //save to store
    
    this.routingService.pushPage(CreateQuestionStep4Page);
  }

}
