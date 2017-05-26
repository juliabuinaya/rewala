export interface IContactsState {
  ids: string[],
  entities: {},
  myEntitiesIds: string[]
  foundEntitiesIds: string[]
  selectedEntitiesIds: string[]
}
export const initialState: IContactsState = {
  ids: [],
  entities: {},
  myEntitiesIds: [],
  foundEntitiesIds: [],
  selectedEntitiesIds: []
};
