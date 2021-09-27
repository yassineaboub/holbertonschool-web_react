import * as types from '../actions/notificationActionTypes';
import { Map } from 'immutable';

const initialState = Map({
    notifications: [],
    filter: '',
    loading: false
});

export function notificationReducer(state = initialState, action) {
    if (action === undefined) return state;

    switch (action.type) {
        case types.FETCH_NOTIFICATIONS_SUCCESS:
            const notifications = action.data;
            return state.mergeDeep(Map({filter: "DEFAULT", notifications}));

        case types.MARK_AS_READ:
            return state.setIn(['notifications', action.index, 'isRead'], true);

        case types.SET_TYPE_FILTER:
            return state.set('filter', action.filter);

        case types.SET_LOADING_STATE:
            return state.set('loading', action.state);

        default: return state;
    }
}

export {initialState};
