export interface ICreateQuestionState {
  text: string;
  clientId: string;
  answerType: string;
  optionsQuantity: number;
  options: Array<string>;
  deadlineDate: string;
}

export const initialState: ICreateQuestionState = {
  text: null,
  clientId: null,
  answerType: null,
  optionsQuantity: 0,
  options: [],
  deadlineDate: null
};
