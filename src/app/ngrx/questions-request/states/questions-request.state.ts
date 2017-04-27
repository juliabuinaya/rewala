import { IQuestionsGetState, IQuestionPostState } from './index';

export interface IQuestionsRequestState {
  questionsGetState?: IQuestionsGetState;
  questionPostState?: IQuestionPostState;
}

export const questionsRequestInitialState: IQuestionsRequestState = {};
