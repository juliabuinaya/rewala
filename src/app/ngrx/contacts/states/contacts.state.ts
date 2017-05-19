export interface IContactsState {
  ids: string[],
  entities: {},
  foundEntitiesIds: string[]
}
export const initialState: IContactsState = {
  ids: [],
  entities: {},
  foundEntitiesIds: []
};
