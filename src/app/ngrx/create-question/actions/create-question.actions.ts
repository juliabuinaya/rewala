import { Action } from '@ngrx/store';
import { type } from '../../util';

import { CREATE_QUESTION } from '../common/create-question.common';

export const ActionTypes = {
  STEP_ONE_SUBMIT: type(`[${CREATE_QUESTION}] Step one submit`),
  STEP_TWO_SUBMIT: type(`[${CREATE_QUESTION}] Step two submit`),
  STEP_THREE_SUBMIT: type(`[${CREATE_QUESTION}] Step three submit`),
  STEP_FOUR_SUBMIT: type(`[${CREATE_QUESTION}] Step four submit`),
  STEP_FIVE_SUBMIT: type(`[${CREATE_QUESTION}] Step five submit`),
  STEP_SIX_SUBMIT: type(`[${CREATE_QUESTION}] Step six submit`),
  
};

export class StepOneSubmitAction implements Action {
  type = ActionTypes.STEP_ONE_SUBMIT;

  constructor(public payload?: any) {
  }
}

export class StepTwoSubmitAction implements Action {
  type = ActionTypes.STEP_TWO_SUBMIT;
  
  constructor(public payload?: any) {
  }
}

export class StepThreeSubmitAction implements Action {
  type = ActionTypes.STEP_THREE_SUBMIT;
  
  constructor(public payload?: any) {
  }
}

export class StepFourSubmitAction implements Action {
  type = ActionTypes.STEP_FOUR_SUBMIT;
  
  constructor(public payload?: any) {
  }
}

export class StepFiveSubmitAction implements Action {
  type = ActionTypes.STEP_FIVE_SUBMIT;
  
  constructor(public payload?: any) {
  }
}

export class StepSixSubmitAction implements Action {
  type = ActionTypes.STEP_SIX_SUBMIT;
  
  constructor(public payload?: any) {
  }
}

export type Actions = StepOneSubmitAction |
  StepTwoSubmitAction |
  StepThreeSubmitAction |
  StepFourSubmitAction |
  StepFiveSubmitAction |
  StepSixSubmitAction;
