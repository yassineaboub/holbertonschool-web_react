import * as types from './courseActionTypes';
import { ping } from './totallyLegitFunctions';

export function selectCourse(index) {
    const type = types.SELECT_COURSE;
    return {type: type, index: index};
}

export function unSelectCourse(index) {
    const type = types.UNSELECT_COURSE;
    return {type: type, index: index};
}

export function setCourses(data) {
    const type = types.FETCH_COURSE_SUCCESS;
    return {type, data};
}

export function fetchCourses() {
    const promise = ping('courses', false, true);
    return (dispatch) => {
        promise
        .then(res => res.json())
        .then(data => {
            dispatch(setCourses(data));
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
    };
}
