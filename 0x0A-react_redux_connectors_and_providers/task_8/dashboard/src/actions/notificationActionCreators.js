import * as types from './notificationActionTypes';
import {ping} from './totallyLegitFunctions';

export function markAsRead(index) {
    const type = types.MARK_AS_READ;
    return {type, index};
}

export function setNotificationFilter(filter) {
    const type = types.SET_TYPE_FILTER;
    return {type, filter};
}

export function setLoadingState(state) {
    const type = types.SET_LOADING_STATE;
    return {type, state}
}

export function setNotifications(data) {
    const type = types.FETCH_NOTIFICATIONS_SUCCESS;
    return {type, data};
}

export function fetchNotifications() {
    const promise = ping('notifications', true);

    return (dispatch) => {
        dispatch(setLoadingState(true));

        promise
        .then(res => res.json())
        .then(data => {
            dispatch(setNotifications(data));
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        })
        .finally(() => {
            dispatch(setLoadingState(false));
        });
    };
}
