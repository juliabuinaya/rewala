import {
  IQuestionsGetState,
  IMyQuestionsGetState,
  IQuestionPostState,
  IAwaitingQuestionsGetState,
  ICompletedQuestionsGetState,
  IPastQuestionsGetState,
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
  pastQuestionsGetState?: IPastQuestionsGetState;
  voiceGivenQuestionsGetState?: IVoiceGivenQuestionsGetState;
}

export const questionsRequestInitialState: IQuestionsRequestState = {};
