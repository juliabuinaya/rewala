import { IQuestionsGetState, IMyQuestionsGetState, IQuestionPostState, IAwaitingQuestionsGetState, IVoiceGivenQuestionsGetState } from './index';


export interface IQuestionsRequestState {
  questionsGetState?: IQuestionsGetState;
  myQuestionsGetState?: IMyQuestionsGetState;
  questionPostState?: IQuestionPostState;
  awaitingQuestionsGetState?: IAwaitingQuestionsGetState;
  voiceGivenQuestionsGetState?: IVoiceGivenQuestionsGetState;
}

export const questionsRequestInitialState: IQuestionsRequestState = {};
