import { answersRequestInitialState, IAnswersRequestState  } from '../states/answers-request.state';

import {
  answersGetReducer,
  answerGetReducer,
  answerPostReducer
} from './index';


export function answersRequestReducer(
  state = answersRequestInitialState,
  action
): IAnswersRequestState {
  return {
    answersGetState: answersGetReducer(state.answersGetState, action),
    answerGetState: answerGetReducer(state.answerGetState, action),
    answerPostState: answerPostReducer(state.answerPostState, action)
  };
}
