import immutable from 'immutable';

const { Map } = immutable;

export default function mergeDeeplyElements(page1, page2) {
  return Map(page1).mergeDeep(Map(page2));
}
