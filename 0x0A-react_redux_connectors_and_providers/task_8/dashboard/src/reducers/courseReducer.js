import * as types from '../actions/courseActionTypes';
import { Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

const initialState = Map([]);

export function courseReducer(state = initialState, action) {
    if (action === undefined) return state;

    switch (action.type) {
        case types.FETCH_COURSE_SUCCESS:
            const data = coursesNormalizer(action.data.map(
                (course) => ({...course, isSelected: false}))
            );
            return state.merge(data);

        case types.SELECT_COURSE:
            return state.setIn(['entities', 'courses', action.index, 'isSelected'], true);

        case types.UNSELECT_COURSE:
            return state.setIn(['entities', 'courses', `${action.index}`, 'isSelected'], false);

        default:
            return state;
    }
}
