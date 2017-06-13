import { IAppState } from '../../state/app.state';


export const getAnswersRequestState = (state: IAppState) => state.answersRequest;

export * from '../nested-states/answers-get/states/answers-get-getter.state';
export * from '../nested-states/answer-get/states/answer-get-getter.state';
export * from '../nested-states/my-answers-get/states/my-answers-get-getter.state';
export * from '../nested-states/answer-post/states/answer-post-getter.state';
