import * as types from '../actions/uiActionTypes';
import { Map } from 'immutable';

const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
});

function uiReducer(state = initialState, action) {
    if (action === undefined) return state;

    switch (action.type) {
        case types.DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true);

        case types.HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false);

        case types.LOGIN_SUCCESS:
            return state.set('isUserLoggedIn', true);

        case types.LOGIN_FAILURE:
            return state.set('isUserLoggedIn', false);

        case types.LOGOUT:
            return state.set('isUserLoggedIn', false).set('user', null);

        case types.LOGIN:
            const user = action.user;
            user.isLoggedIn = true;
            return state.set('user', user).set('isUserLoggedIn', true);

        default:
            return state;
    }
}

export {uiReducer, initialState};
