import { IQuestionsGetState, questionsGetInitialState } from '../states/questions-get.state';
import { Actions, ActionTypes } from '../actions/questions-get.actions';


export function questionsGetReducer(
  state = questionsGetInitialState,
  action: Actions
): IQuestionsGetState {
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
