import { IAnswersGetState, IAnswerGetState, IAnswerPostState, IAnswersChangeState } from './index';

export interface IAnswersRequestState {
  answersGetState?: IAnswersGetState;
  answerGetState?: IAnswerGetState;
  myAnswersGetState?: IAnswerGetState;
  answerPostState?: IAnswerPostState;
  multipleAnswersPostState?: IAnswerPostState;
  answersChangeState?: IAnswersChangeState;
}

export const answersRequestInitialState: IAnswersRequestState = {};
