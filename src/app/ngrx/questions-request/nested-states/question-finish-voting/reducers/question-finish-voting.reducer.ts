import { IQuestionFinishVotingState, questionFinishVotingInitialState } from '../states/question-finish-voting.state';
import { Actions, ActionTypes } from '../actions/question-finish-voting.actions';


export function questionFinishVotingReducer(
  state = questionFinishVotingInitialState,
  action: Actions
): IQuestionFinishVotingState {
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
