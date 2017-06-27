import { answersRequestInitialState, IAnswersRequestState  } from '../states/answers-request.state';

import {
  answersGetReducer,
  answerGetReducer,
  answerPostReducer,
  multipleAnswersPostReducer,
  myAnswersGetReducer,
  answersChangeReducer,
  answerDeleteReducer
} from './index';


export function answersRequestReducer(
  state = answersRequestInitialState,
  action
): IAnswersRequestState {
  return {
    answersGetState: answersGetReducer(state.answersGetState, action),
    answerGetState: answerGetReducer(state.answerGetState, action),
    myAnswersGetState: myAnswersGetReducer(state.answerGetState, action),
    answerPostState: answerPostReducer(state.answerPostState, action),
    answerDeleteState: answerDeleteReducer(state.answerDeleteState, action),
    multipleAnswersPostState: multipleAnswersPostReducer(state.answerPostState, action),
    answersChangeState: answersChangeReducer(state.answersChangeState, action)
  };
}
