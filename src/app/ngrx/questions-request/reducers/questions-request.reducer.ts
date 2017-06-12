import { questionsRequestInitialState, IQuestionsRequestState  } from '../states/questions-request.state';

import {
  questionsGetReducer,
  myQuestionsGetReducer,
  questionPostReducer,
  awaitingQuestionsGetReducer
} from './index';


export function questionsRequestReducer(
  state = questionsRequestInitialState,
  action
): IQuestionsRequestState {
  return {
    questionsGetState: questionsGetReducer(state.questionsGetState, action),
    myQuestionsGetState: myQuestionsGetReducer(state.myQuestionsGetState, action),
    awaitingQuestionsGetState: awaitingQuestionsGetReducer(state.awaitingQuestionsGetState, action),
    questionPostState: questionPostReducer(state.questionPostState, action)
  };
}
