import { courseReducer } from './courseReducer';
import * as validActions from '../actions/courseActionCreators';
import * as invalidActions from '../actions/uiActionCreator';
import assert from 'assert';
import {listCourses} from '../utils';

const fetchAction = {type: 'FETCH_COURSE_SUCCESS', data: listCourses};

describe('Course Reducer', () => {
    describe('Invalid actions', () => {
        it('No action', () => {
            const state = courseReducer(undefined, undefined).toJSON();
            const received = JSON.stringify(state);
            const expected = JSON.stringify({});

            assert.equal(received, expected);
        });

        it('Invalid type', () => {
            const state = courseReducer(undefined, invalidActions.login()).toJSON();
            const received = JSON.stringify(state);
            const expected = JSON.stringify({});

            assert.equal(received, expected);
        });
    });

    describe('Valid actions', () => {
        it('Fetch Course Success', () => {
            const state = courseReducer(undefined, fetchAction);
            const {entities, result} = state.toJSON();
            const courses = [
                entities.courses["1"],
                entities.courses["2"],
                entities.courses["3"]
            ];
            const [es6, webpack, react] = courses;

            assert.equal(es6.name, 'ES6');
            assert.equal(es6.isSelected, false);

            assert.equal(webpack.name, 'Webpack');
            assert.equal(webpack.isSelected, false);

            assert.equal(react.name, 'React');
            assert.equal(react.isSelected, false);
        });

        it('Select Course', () => {
            let state = courseReducer(undefined, fetchAction);
            assert.equal(state.toJSON().entities.courses["1"].isSelected, false);
            state = courseReducer(state, validActions.selectCourse('1'));
            assert.equal(state.toJSON().entities.courses["1"].isSelected, true);
        });

        it('Unselect Course', () => {
            let state = courseReducer(undefined, fetchAction);
            assert.equal(state.toJSON().entities.courses["1"].isSelected, false);
            state = courseReducer(state, validActions.selectCourse('1'));
            assert.equal(state.toJSON().entities.courses["1"].isSelected, true);

            state = courseReducer(state, validActions.unSelectCourse('1'));
            assert.equal(state.toJSON().entities.courses["1"].isSelected, false);
        });
    });
});
