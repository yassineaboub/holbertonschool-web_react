import {mapStateToProps} from './App';
import { fromJS } from 'immutable';
import {equal as assert} from 'assert';

describe('Redux Connection', () => {
    describe('Map state to props', () => {
        it('isLoggedIn', () => {
            const state = (isLoggedIn) => ({isUserLoggedIn: isLoggedIn});
            let value = mapStateToProps(fromJS(state(false)));
            assert(value.isLoggedIn, false);

            value = mapStateToProps(fromJS(state(true)));
            assert(value.isLoggedIn, true);
        });

        it('displayDrawer', () => {
            const state = (visible) => (fromJS({isNotificationDrawerVisible: visible}));
            let value = mapStateToProps(state(false));
            assert(value.displayDrawer, false);

            value = mapStateToProps(state(true));
            assert(value.displayDrawer, true);
        });
    });
});
