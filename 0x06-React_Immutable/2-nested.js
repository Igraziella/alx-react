import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  if (object === undefined || array.length === 0) {
    return Map();
  }

  const immutableMap = Map(object);
  const value = immutableMap.getIn(array);

  if (typeof value === 'string' || value instanceof Map) {
    return Map(value);
  }

  return Map();
}
