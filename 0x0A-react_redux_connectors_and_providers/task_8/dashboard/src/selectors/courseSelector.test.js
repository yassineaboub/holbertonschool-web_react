import { getListCourses } from './courseSelector';
import { courseReducer } from '../reducers/courseReducer';
import * as actions from '../actions/courseActionCreators';
import { listCourses } from '../utils';
import { equal as assert } from 'assert';

const action = {type: "FETCH_COURSE_SUCCESS", data: listCourses};
let state = courseReducer(undefined, action);

describe('course Selector', () => {
    it('getListCourses', () => {
        const entities = getListCourses(state);
        assert(entities.size, 2);

        const courses = entities.getIn(['0', 'courses'])
        assert(courses !== undefined, true);
    });
});
