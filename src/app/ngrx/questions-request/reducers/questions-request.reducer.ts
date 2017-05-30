import { questionsRequestInitialState, IQuestionsRequestState  } from '../states/questions-request.state';

import {
  questionsGetReducer,
  myQuestionsGetReducer,
  questionPostReducer
} from './index';


export function questionsRequestReducer(
  state = questionsRequestInitialState,
  action
): IQuestionsRequestState {
  return {
    questionsGetState: questionsGetReducer(state.questionsGetState, action),
    myQuestionsGetState: questionsGetReducer(state.myQuestionsGetState, action),
    questionPostState: questionPostReducer(state.questionPostState, action)
  };
}
