import {
  IQuestionsGetState,
  IMyQuestionsGetState,
  IQuestionPostState,
  IAwaitingQuestionsGetState,
  IVoiceGivenQuestionsGetState,
  IQuestionDeleteState
} from './index';


export interface IQuestionsRequestState {
  questionsGetState?: IQuestionsGetState;
  myQuestionsGetState?: IMyQuestionsGetState;
  questionPostState?: IQuestionPostState;
  questionDeleteState?: IQuestionDeleteState;
  awaitingQuestionsGetState?: IAwaitingQuestionsGetState;
  voiceGivenQuestionsGetState?: IVoiceGivenQuestionsGetState;
}

export const questionsRequestInitialState: IQuestionsRequestState = {};
