import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { RoutingService } from '../../../core/services/routing.service';
import { CreateQuestionStep2Page } from '../create-question-step-2/create-question-step-2';

import { IAppState } from '../../../ngrx/state/app.state';
import { CreateQuestionService } from '../../../core/services/create-question.service';


//import * as userStateGetter from './ngrx/user/states/user-getter.state';
import * as userStateGetter from '../../../ngrx/user/states/user-getter.state';


@IonicPage({
  name: 'create-question-step-1'
})
@Component({
  selector: 'page-create-question-step-1',
  templateUrl: 'create-question-step-1.html'
})
export class CreateQuestionStep1Page {
  
  subscriber;
  userId;
  questionText;

  constructor(public routingService: RoutingService,
              public store: Store<IAppState>,
              public createQuestionService: CreateQuestionService) {
  
    this.subscriber = this.store.select(userStateGetter.getIdFromState)
    .subscribe(id => this.userId = id);
  }
  
  submit(form) {
    if (form.valid) {
      console.log(this.questionText);
      
      let payload = {
        text: this.questionText,
        clientId: this.userId
      };
      
      this.createQuestionService.createGroupStepOne(payload);
      this.routingService.pushPage(CreateQuestionStep2Page);
    }
  }

}
