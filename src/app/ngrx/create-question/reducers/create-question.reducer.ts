import { ICreateQuestionState, initialState } from '../states/create-question.state';
import { Actions, ActionTypes } from '../actions/create-question.actions';
import {
  CreateGroupDetailFormModel, CreateGroupModel
} from '../../../core/models/index';


export function reducer(state = initialState,
                        action: Actions): ICreateQuestionState {
  switch (action.type) {

    case ActionTypes.STEP_ONE_SUBMIT:
      return Object.assign({}, state, {
        text: action.payload.text,
        clientId: action.payload.clientId
      });
  
    case ActionTypes.STEP_TWO_SUBMIT:
      return Object.assign({}, state, {
        answerType: action.payload.answerType
      });
  
    case ActionTypes.STEP_THREE_SUBMIT:
      return state;
  
    case ActionTypes.STEP_FOUR_SUBMIT:
      return state;
  
    case ActionTypes.STEP_FIVE_SUBMIT:
      return state;
  
    case ActionTypes.STEP_SIX_SUBMIT:
      return state;
      
    default:
      return state;
  }
}
