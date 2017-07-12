export interface IQuestionsState {
  ids: string[];
  entities: {};
  myEntitiesIds: string[];
  awaitingEntitiesIds: string[];
  voiceGivenEntitiesIds: string[];
  completedEntitiesIds: string[];
  pastEntitiesIds: string[];
}
export const initialState: IQuestionsState = {
  ids: [],
  entities: {},
  myEntitiesIds: [],
  awaitingEntitiesIds: [],
  voiceGivenEntitiesIds: [],
  completedEntitiesIds: [],
  pastEntitiesIds: []
};
