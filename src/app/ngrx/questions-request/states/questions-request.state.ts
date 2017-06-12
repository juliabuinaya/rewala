import { IQuestionsGetState, IMyQuestionsGetState, IQuestionPostState, IAwaitingQuestionsGetState } from './index';

export interface IQuestionsRequestState {
  questionsGetState?: IQuestionsGetState;
  myQuestionsGetState?: IMyQuestionsGetState;
  questionPostState?: IQuestionPostState;
  awaitingQuestionsGetState?: IAwaitingQuestionsGetState;
}

export const questionsRequestInitialState: IQuestionsRequestState = {};
