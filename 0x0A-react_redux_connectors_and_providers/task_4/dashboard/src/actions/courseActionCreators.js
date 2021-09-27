import * as types from './courseActionTypes';
import { bound } from './totallyLegitFunctions';

export function selectCourse(index) {
    const type = types.SELECT_COURSE;
    return {type: type, index: index};
}

export function unSelectCourse(index) {
    const type = types.UNSELECT_COURSE;
    return {type: type, index: index};
}

const boundSelectCourse = bound(selectCourse);
const boundUnSelectCourse = bound(unSelectCourse);

export {boundSelectCourse, boundUnSelectCourse};
