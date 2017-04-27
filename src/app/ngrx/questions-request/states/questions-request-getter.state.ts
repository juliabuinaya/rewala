import { IAppState } from '../../state/app.state';

export const getQuestionsRequestState = (state: IAppState) => state.questionsRequest;

export * from '../nested-states/questions-get/states/questions-get-getter.state';
export * from '../nested-states/question-post/states/question-post-getter.state';
