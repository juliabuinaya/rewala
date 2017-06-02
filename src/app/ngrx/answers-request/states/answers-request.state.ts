import { IAnswersGetState, IAnswerGetState, IAnswerPostState } from './index';

export interface IAnswersRequestState {
  answersGetState?: IAnswersGetState;
  answerGetState?: IAnswerGetState;
  answerPostState?: IAnswerPostState;
}

export const answersRequestInitialState: IAnswersRequestState = {};
