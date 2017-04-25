import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '../../ngrx/state/app.state';


//actions
import * as createQuestionActions from '../../ngrx/create-question/actions/index';

@Injectable()
export class CreateQuestionService {
  
  constructor(public store: Store<IAppState>) {
  }
  
  createGroupStepOne(payload) {
    this.store.dispatch(new createQuestionActions.StepOneSubmitAction(payload));
  }
  
  createGroupStepTwo(payload) {
    this.store.dispatch(new createQuestionActions.StepTwoSubmitAction(payload));
  }
  
  createGroupStepThree(payload) {
    this.store.dispatch(new createQuestionActions.StepThreeSubmitAction(payload));
  }
  
  createGroupStepFour(payload) {
    this.store.dispatch(new createQuestionActions.StepFourSubmitAction(payload));
  }
  
  createGroupStepFive(payload) {
    this.store.dispatch(new createQuestionActions.StepFiveSubmitAction(payload));
  }
  
  createGroupStepSix(payload) {
    this.store.dispatch(new createQuestionActions.StepSixSubmitAction(payload));
  }
}