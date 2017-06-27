import { IAnswersGetState, IAnswerGetState, IAnswerPostState, IAnswersChangeState, IAnswerDeleteState } from './index';

export interface IAnswersRequestState {
  answersGetState?: IAnswersGetState;
  answerGetState?: IAnswerGetState;
  myAnswersGetState?: IAnswerGetState;
  answerPostState?: IAnswerPostState;
  answerDeleteState?: IAnswerDeleteState;
  multipleAnswersPostState?: IAnswerPostState;
  answersChangeState?: IAnswersChangeState;
}

export const answersRequestInitialState: IAnswersRequestState = {};
