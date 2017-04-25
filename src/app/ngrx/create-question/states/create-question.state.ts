export interface ICreateQuestionState {
  text: string;
  clientId: string;
  answerType: string;
}

export const initialState: ICreateQuestionState = {
  text: null,
  clientId: null,
  answerType: null
};
