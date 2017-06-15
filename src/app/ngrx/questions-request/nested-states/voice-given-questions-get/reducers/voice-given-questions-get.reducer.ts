import { IVoiceGivenQuestionsGetState, voiceGivenQuestionsGetInitialState } from '../states/voice-given-questions-get.state';
import { Actions, ActionTypes } from '../actions/voice-given-questions-get.actions';


export function voiceGivenQuestionsGetReducer(
  state = voiceGivenQuestionsGetInitialState,
  action: Actions
): IVoiceGivenQuestionsGetState {
  switch (action.type) {
    
    case ActionTypes.REQUEST:

      return Object.assign({}, state, {
        loading: true,
        loaded: false,
      });
    
    case ActionTypes.REQUEST_SUCCESS:
    case ActionTypes.REQUEST_FAIL:
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
      });
    
    default: {
      return state;
    }
  }
}
