import { IMultipleAnswersPostState, multipleAnswersPostInitialState } from '../states/multiple-answers-post.state';
import { Actions, ActionTypes } from '../actions/multiple-answers-post.actions';


export function multipleAnswersPostReducer(
  state = multipleAnswersPostInitialState,
  action: Actions
): IMultipleAnswersPostState {
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
