import { IQuestionDeleteState, questionDeleteInitialState } from '../states/question-delete.state';
import { Actions, ActionTypes } from '../actions/question-delete.actions';


export function questionDeleteReducer(
  state = questionDeleteInitialState,
  action: Actions
): IQuestionDeleteState {
  switch (action.type) {
    
    case ActionTypes.REQUEST:
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        status: '',
        data: null
      });
    
    case ActionTypes.REQUEST_SUCCESS:
    case ActionTypes.REQUEST_FAIL:
      return Object.assign({}, state, {
        loading: false,
        loaded: true
      });
    
    default: {
      return state;
    }
    
  }
}
