export interface IOptionsState {
  ids: string[],
  entities: {},
  currentEntitiesIds: string[]
}
export const initialState: IOptionsState = {
  ids: [],
  entities: {},
  currentEntitiesIds: []
};
