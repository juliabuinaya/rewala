import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { RoutingService } from '../../../core/services/routing.service';

@IonicPage({
  name: 'create-question-step-3'
})
@Component({
  selector: 'page-create-question-step-3',
  templateUrl: 'create-question-step-3.html'
})
export class CreateQuestionStep3Page {

  constructor(public routingService: RoutingService) {
  }

}
