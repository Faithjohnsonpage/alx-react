import { fromJS } from "immutable";

const example = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};

export default function getImmutableObject (object) {
  return fromJS(object);
}

console.log(getImmutableObject(example));
