import { fromJS } from 'immutable';

export function getListObject (array) {
  return fromJS(array);
}

export function addElementToList (list, element) {
  return list.push(element);
}

// Test Usage
const list = getListObject([1, 2, 3, 4]);
console.log(addElementToList(list, 'table'));
