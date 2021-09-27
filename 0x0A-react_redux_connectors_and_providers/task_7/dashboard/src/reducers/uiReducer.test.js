import * as validActions from '../actions/uiActionCreator';
import * as invalidAction from '../actions/courseActionCreators';
import assert from 'assert';
import {initialState, uiReducer} from './uiReducer';

describe('basic reducer', () => {
    describe('Invalid actions', () => { 
        it('No action', () => {
            const state = uiReducer(undefined, undefined).toJSON();
            const {isNotificationDrawerVisible, isUserLoggedIn, user} = state;
    
            assert.equal(isNotificationDrawerVisible, false);
            assert.equal(isUserLoggedIn, false);
            assert.equal(JSON.stringify(user), JSON.stringify({}));
        });
    
        it('Wrong Type', () => {
            const state = uiReducer(undefined, invalidAction.selectCourse(1)).toJSON();
            const {isNotificationDrawerVisible, isUserLoggedIn, user} = state;
    
            assert.equal(isNotificationDrawerVisible, false);
            assert.equal(isUserLoggedIn, false);
            assert.equal(JSON.stringify(user), JSON.stringify({}));
        });
    });

    describe('valid actions', () => {
        it('displayNotificationDrawer', () => {
            const state = uiReducer(undefined, validActions.displayNotificationDrawer()).toJSON();

            assert.equal(state.isNotificationDrawerVisible, true);
        });

        it('hideNotificationDrawer', () => {
            let state = uiReducer(undefined, validActions.displayNotificationDrawer());
            state = uiReducer(state, validActions.hideNotificationDrawer()).toJSON();

            assert.equal(state.isNotificationDrawerVisible, false);
        });

        it('Login Success', () => {
            const state = uiReducer(undefined, validActions.loginSuccess()).toJSON();

            assert.equal(state.isUserLoggedIn, true);
        });

        it('Login Failure', () => {
            let state = uiReducer(undefined, validActions.loginFailure()).toJSON();
            assert.equal(state.isUserLoggedIn, false);
        });

        it('Logout', () => {
            let state = uiReducer(undefined, validActions.loginSuccess());
            assert.equal(state.toJSON().isUserLoggedIn, true);
            state = uiReducer(state, validActions.logout()).toJSON();
            assert.equal(state.isUserLoggedIn, false);
        });

        it('Login', () => {
            const {email, password} = {email: 'email@gmail.com', password: 'password'};
            const state = uiReducer(undefined, validActions.login(email, password));
            const {isNotificationDrawerVisible, isUserLoggedIn, user} = state.toJSON();

            assert.equal(isNotificationDrawerVisible, false);
            assert.equal(isUserLoggedIn, true);
            assert.equal(user.email, email);
            assert.equal(user.password, password);
        });
    });
});
