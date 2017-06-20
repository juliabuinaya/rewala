import { IAnswersGetState, IAnswerGetState, IAnswerPostState } from './index';

export interface IAnswersRequestState {
  answersGetState?: IAnswersGetState;
  answerGetState?: IAnswerGetState;
  myAnswersGetState?: IAnswerGetState;
  answerPostState?: IAnswerPostState;
  multipleAnswersPostState?: IAnswerPostState;
}

export const answersRequestInitialState: IAnswersRequestState = {};
