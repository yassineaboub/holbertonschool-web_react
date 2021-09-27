import {selectCourse, unSelectCourse} from './courseActionCreators';
import assert from 'assert';

describe('Action creators', () => {
    it('selectCourse', () =>{
        const received = JSON.stringify(selectCourse(1));
        const expected = JSON.stringify({type: 'SELECT_COURSE', index: 1});

        assert.equal(received, expected);
    });

    it('unSelectCourse', () => {
        const received = JSON.stringify(unSelectCourse(1));
        const expected = JSON.stringify({type: 'UNSELECT_COURSE', index: 1});

        assert.equal(received, expected);
    });
});
