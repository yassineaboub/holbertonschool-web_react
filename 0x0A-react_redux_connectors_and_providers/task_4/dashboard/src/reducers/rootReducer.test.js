import { rootReducer } from './rootReducer';
import {equal as assert} from 'assert';
import {Map} from 'immutable';

const states = rootReducer();
const {courses, notifications, ui} = states;
const isMap = (map) => (Map.isMap(map));

describe('rootReducer', () => {
    it('courses', () => { assert( isMap(courses), true); });
    it('notifications', () => { assert( isMap(notifications), true); });
    it('ui', () => { assert( isMap(ui), true); });
});
