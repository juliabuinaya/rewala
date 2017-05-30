export interface IQuestionsState {
  ids: string[],
  entities: {},
  myEntitiesIds: string[]
}
export const initialState: IQuestionsState = {
  ids: [],
  entities: {},
  myEntitiesIds: []
};
