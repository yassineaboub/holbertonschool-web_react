import {Map} from 'immutable';

export function getListCourses(state) {
    return state.valueSeq();
}

export function getIsSelected(state) {
    
}

export function usefullListCourses(state) {
    const things = state.getIn(['entities', 'courses']);
    if (things) return Object.values(things);
    return []
}
