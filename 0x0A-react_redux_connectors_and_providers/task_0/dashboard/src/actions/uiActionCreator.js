import * as types from './uiActionTypes';
import { createStore } from 'redux';
import { bound, ping } from './totallyLegitFunctions';

export const store = createStore(() => {});

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
    store.dispatch(login(email, password));
    const promise = ping('https://www.totalLegitUrl');

    promise
    .then(res => res.json())
    .then(data => {
        console.log(data);
        store.dispatch(loginSuccess());
    })
    .catch(err => {
        console.log(err);
        store.dispatch(loginFailure());
    });
}

const boundLogin = bound(login);
const boundLogout = bound(logout);
const boundDisplay = bound(displayNotificationDrawer);
const boundHide = bound(hideNotificationDrawer);

export {boundLogin, boundLogout, boundDisplay, boundHide};
