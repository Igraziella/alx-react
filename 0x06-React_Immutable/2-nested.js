export default functiom accessImmutableObject(object, array) {
  if (object === undefined || array.length === 0) {
    return undefined;
  }

  let currentValue = object;

  for (const jey of array) {
    if (typeof currentValue === 'object' && currentValue !== null) {
      currentValue = currentValue[key];
    } else {
      return undefined;
    } 
  }

  if (typeof currentValue === 'string' || currentValue instanceof Map) {
    return currentValue;
  } 

  return undefined;
}
