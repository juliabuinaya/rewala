import { IQuestionsGetState, IMyQuestionsGetState, IQuestionPostState } from './index';

export interface IQuestionsRequestState {
  questionsGetState?: IQuestionsGetState;
  myQuestionsGetState?: IMyQuestionsGetState;
  questionPostState?: IQuestionPostState;
}

export const questionsRequestInitialState: IQuestionsRequestState = {};
