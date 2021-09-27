import {mapStateToProps} from './App';
import { fromJS } from 'immutable';
import {equal as assert} from 'assert';

describe('Redux Connection', () => {
    describe('Map to state', () => {
        it('isLoggedIn', () => {
            const state = (isLoggedIn) => ({isUserLoggedIn: isLoggedIn});
            let value = mapStateToProps(fromJS(state(false)));
            assert(value.isLoggedIn, false);

            value = mapStateToProps(fromJS(state(true)));
            assert(value.isLoggedIn, true);
        });
    });
});
