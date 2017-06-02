/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 */

import * as _ from 'lodash';

let typeCache: { [label: string]: boolean } = {};
export function type<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }
  
  typeCache[<string>label] = true;
  
  return <T>label;
}

export function updateEntities(payload, entityModel?) {
  if(!_.isArray(payload)) {
    payload = [payload];
  }
  let entitiesIds = payload.map(payload => payload.id);
  let entities = payload.reduce((entities: { [id: string]: any }, entity: any) => {
    return Object.assign(entities, {
      [entity.id]: entityModel ? new entityModel(entity) : entity
    });
  }, {});
  return {entitiesIds, entities};
}