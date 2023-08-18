import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  if (object === undefined || array.length === 0) {
    return undefined;
  }

  const immutableMap = Map(object);
  const value = immutableMap.getIn(array);

  if (typeof value === 'string' || value instanceof Map) {
    return value;
  } 

  return undefined;
}
