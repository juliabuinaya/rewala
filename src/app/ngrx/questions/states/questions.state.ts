export interface IQuestionsState {
  ids: string[],
  entities: {},
  myEntitiesIds: string[],
  awaitingEntitiesIds: string[]
}
export const initialState: IQuestionsState = {
  ids: [],
  entities: {},
  myEntitiesIds: [],
  awaitingEntitiesIds: []
};
