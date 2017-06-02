import { IAnswerGetState, answerGetInitialState } from '../states/answer-get.state';
import { Actions, ActionTypes } from '../actions/answer-get.actions';


export function answerGetReducer(
  state = answerGetInitialState,
  action: Actions
): IAnswerGetState {
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
        loaded: true,
        status: action.payload.status,
        data: action.payload.data
      });
    
    default: {
      return state;
    }
    
  }
}
