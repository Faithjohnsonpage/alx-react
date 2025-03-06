import { Map, List } from "immutable";

// Concatenates two Lists
export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

// Merges two Maps
export function mergeElements(page1, page2) {
  return Map(page1).merge(Map(page2));
}

// Testing
const page1 = [1, 2, 3];
const page2 = [2, 3, 4];

console.log(concatElements(page1, page2).toJS()); // [1, 2, 3, 2, 3, 4]

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log(mergeElements(obj1, obj2).toJS()); // { a: 1, b: 3, c: 4 }
