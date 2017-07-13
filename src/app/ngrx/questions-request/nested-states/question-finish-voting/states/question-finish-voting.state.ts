export interface IQuestionFinishVotingState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const questionFinishVotingInitialState: IQuestionFinishVotingState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
