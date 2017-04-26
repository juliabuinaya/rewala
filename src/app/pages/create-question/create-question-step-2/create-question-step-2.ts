import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { RoutingService } from '../../../core/services/routing.service';
import { CreateQuestionStep3Page } from '../create-question-step-3/create-question-step-3';
import { CreateQuestionService } from '../../../core/services/create-question.service';

@IonicPage({
  name: 'create-question-step-2'
})
@Component({
  selector: 'page-create-question-step-2',
  templateUrl: 'create-question-step-2.html'
})
export class CreateQuestionStep2Page {

  constructor(public routingService: RoutingService,
              public createQuestionService: CreateQuestionService) {
  }

  onChoose(answerType) {
    let payload = {answerType}
    this.createQuestionService.createGroupStepTwo(payload);
    this.routingService.pushPage(CreateQuestionStep3Page);
  }
  
}
