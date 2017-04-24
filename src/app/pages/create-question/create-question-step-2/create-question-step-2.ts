import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { RoutingService } from '../../../core/services/routing.service';
import { CreateQuestionStep3Page } from '../create-question-step-3/create-question-step-3';

@IonicPage({
  name: 'create-question-step-2'
})
@Component({
  selector: 'page-create-question-step-2',
  templateUrl: 'create-question-step-2.html'
})
export class CreateQuestionStep2Page {

  constructor(public routingService: RoutingService) {
  }

  onChoose(answerType) {
    console.log(answerType);
    
    //save to store
    
    this.routingService.pushPage(CreateQuestionStep3Page);
  }
  
}
