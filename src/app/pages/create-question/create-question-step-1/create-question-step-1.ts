import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { RoutingService } from '../../../core/services/routing.service';
import { CreateQuestionStep2Page } from '../create-question-step-2/create-question-step-2';

@IonicPage({
  name: 'create-question-step-1'
})
@Component({
  selector: 'page-create-question-step-1',
  templateUrl: 'create-question-step-1.html'
})
export class CreateQuestionStep1Page {
  
  public questionData = {
    text: ''
  };

  constructor(public routingService: RoutingService) {
  }
  
  onSubmit(form) {
    if (form.valid) {
      console.log(this.questionData.text);
      
      //save to store
      
      this.routingService.pushPage(CreateQuestionStep2Page);
      
    }
  }

}
