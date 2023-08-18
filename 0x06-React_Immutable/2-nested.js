import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  const immutableMap = Map(object);
  const value = immutableMap.getIn(array);

  if (typeof value === 'string' || value instanceof Map) {
    return value;
  }
}
