import { questionsRequestInitialState, IQuestionsRequestState  } from '../states/questions-request.state';

import {
  questionsGetReducer,
  questionPostReducer
} from './index';


export function questionsRequestReducer(
  state = questionsRequestInitialState,
  action
): IQuestionsRequestState {
  return {
    questionsGetState: questionsGetReducer(state.questionsGetState, action),
    questionPostState: questionPostReducer(state.questionPostState, action)
  };
}
