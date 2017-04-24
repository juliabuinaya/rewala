import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { RoutingService } from '../../../core/services/routing.service';

@IonicPage({
  name: 'create-question-step-4'
})
@Component({
  selector: 'page-create-question-step-4',
  templateUrl: 'create-question-step-4.html'
})
export class CreateQuestionStep4Page {
  
  optionText = '';
  options = [];
  counter = 4;
  showForm = true;
  
  constructor(public routingService: RoutingService) {
  }
  
  onSubmit(form) {
    if (form.valid) {
      console.log(this.optionText);
      
      this.options.push(this.optionText);
      this.optionText = '';
      if(this.options.length == this.counter) {
        this.showForm = false;
        
      //save to store
        
      //this.routingService.pushPage(CreateQuestionStep5Page);
      }
      
  
      
    }
  }

}
