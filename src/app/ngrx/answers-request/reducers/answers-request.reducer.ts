import { answersRequestInitialState, IAnswersRequestState  } from '../states/answers-request.state';

import {
  answersGetReducer,
  answerGetReducer,
  answerPostReducer,
  myAnswersGetReducer
} from './index';


export function answersRequestReducer(
  state = answersRequestInitialState,
  action
): IAnswersRequestState {
  return {
    answersGetState: answersGetReducer(state.answersGetState, action),
    answerGetState: answerGetReducer(state.answerGetState, action),
    myAnswersGetState: myAnswersGetReducer(state.answerGetState, action),
    answerPostState: answerPostReducer(state.answerPostState, action)
  };
}
