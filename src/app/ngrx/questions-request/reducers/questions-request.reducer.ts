import { questionsRequestInitialState, IQuestionsRequestState  } from '../states/questions-request.state';

import {
  questionsGetReducer,
  myQuestionsGetReducer,
  questionPostReducer,
  questionFinishVotingReducer,
  questionDeleteReducer,
  awaitingQuestionsGetReducer,
  completedQuestionsGetReducer,
  pastQuestionsGetReducer,
} from './index';


export function questionsRequestReducer(
  state = questionsRequestInitialState,
  action
): IQuestionsRequestState {
  return {
    questionsGetState: questionsGetReducer(state.questionsGetState, action),
    myQuestionsGetState: myQuestionsGetReducer(state.myQuestionsGetState, action),
    awaitingQuestionsGetState: awaitingQuestionsGetReducer(state.awaitingQuestionsGetState, action),
    completedQuestionsGetState: completedQuestionsGetReducer(state.completedQuestionsGetState, action),
    pastQuestionsGetState: pastQuestionsGetReducer(state.pastQuestionsGetState, action),
    questionPostState: questionPostReducer(state.questionPostState, action),
    questionFinishVotingState: questionFinishVotingReducer(state.questionFinishVotingState, action),
    questionDeleteState: questionDeleteReducer(state.questionDeleteState, action)
  };
}
