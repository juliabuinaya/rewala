import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { RoutingService } from '../../../core/services/routing.service';

@IonicPage({
  name: 'create-question-step-6'
})
@Component({
  selector: 'page-create-question-step-6',
  templateUrl: 'create-question-step-6.html'
})
export class CreateQuestionStep6Page {
  
  groups = [
    {
      name: 'Group A'
    },
    {
      name: 'Group B'
    },
    {
      name: 'Group C'
    }
  ];
  
  constructor(public routingService: RoutingService) {
  }
  
  
}
