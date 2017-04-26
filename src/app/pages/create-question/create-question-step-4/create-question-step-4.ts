import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { RoutingService } from '../../../core/services/routing.service';
import { CreateQuestionService } from '../../../core/services/create-question.service';
import { CreateQuestionStep5Page } from '../create-question-step-5/create-question-step-5';

import { IAppState } from '../../../ngrx/state/app.state';
import * as createQuestionStateGetter from '../../../ngrx/create-question/states/create-question-getter.state';


@IonicPage({
  name: 'create-question-step-4'
})
@Component({
  selector: 'page-create-question-step-4',
  templateUrl: 'create-question-step-4.html'
})
export class CreateQuestionStep4Page {
  
  subscriber;
  optionText = '';
  options = [];
  optionsQuantity;
  showForm = true;
  showNext = false;
  
  constructor(public routingService: RoutingService,
              public store: Store<IAppState>,
              public createQuestionService: CreateQuestionService) {
    
    this.subscriber = this.store.select(createQuestionStateGetter.getOptionsQuantityFromState)
    .subscribe(quantity => this.optionsQuantity = quantity);
  }
  
  onSubmit(form) {
    if (form.valid) {
      this.options.push(this.optionText);
      this.optionText = '';
      if(this.options.length == this.optionsQuantity) {
        this.showForm = false;
        this.showNext = true;
      }
    }
  }
  
  toNextStep() {
    let payload = {options: this.options}
    this.createQuestionService.createGroupStepFour(payload);
    this.routingService.pushPage(CreateQuestionStep5Page);
  }
  
  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
  
}
