import immutable from 'immutable';

const { Map } = immutable;

const getImmutableObject = (object) => Map(object);

export default getImmutableObject;
