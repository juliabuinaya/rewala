import {
  IQuestionsGetState,
  IMyQuestionsGetState,
  IQuestionPostState,
  IAwaitingQuestionsGetState,
  ICompletedQuestionsGetState,
  IVoiceGivenQuestionsGetState,
  IQuestionDeleteState
} from './index';


export interface IQuestionsRequestState {
  questionsGetState?: IQuestionsGetState;
  myQuestionsGetState?: IMyQuestionsGetState;
  questionPostState?: IQuestionPostState;
  questionDeleteState?: IQuestionDeleteState;
  awaitingQuestionsGetState?: IAwaitingQuestionsGetState;
  completedQuestionsGetState?: ICompletedQuestionsGetState;
  voiceGivenQuestionsGetState?: IVoiceGivenQuestionsGetState;
}

export const questionsRequestInitialState: IQuestionsRequestState = {};
