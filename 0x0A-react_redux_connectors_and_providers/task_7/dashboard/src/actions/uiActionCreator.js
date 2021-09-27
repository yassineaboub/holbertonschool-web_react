import * as types from './uiActionTypes';
import { bound, ping } from './totallyLegitFunctions';

export function login(email, password) {
    const type = types.LOGIN;
    return {type, user: {email, password}};
}

export function logout() {
    const type = types.LOGOUT;
    return {type};
}

export function displayNotificationDrawer() { 
    const type = types.DISPLAY_NOTIFICATION_DRAWER;
    return {type};
}

export function hideNotificationDrawer() {
    const type = types.HIDE_NOTIFICATION_DRAWER;
    return {type};
}

export function loginSuccess() {
    const type = types.LOGIN_SUCCESS;
    return {type};
}

export function loginFailure() {
    const type = types.LOGIN_FAILURE;
    return {type};
}

export function loginRequest(email, password) {
    const promise = ping('https://www.totalLegitUrl');
    
    return (dispatch) => {
        dispatch(login(email, password));
        return promise
        .then(res => res.json())
        .then(data => {
            dispatch(loginSuccess());
        })
        .catch(err => {
            console.log(`Error: ${err}`);
            dispatch(loginFailure());
        });
    };
}
