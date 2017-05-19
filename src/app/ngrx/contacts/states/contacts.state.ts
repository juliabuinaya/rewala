export interface IContactsState {
  ids: string[],
  entities: {},
  foundEntityIds: string[]
}
export const initialState: IContactsState = {
  ids: [],
  entities: {},
  foundEntityIds: []
};
