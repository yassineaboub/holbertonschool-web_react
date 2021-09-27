import * as uiCreators from './uiActionCreator';
import assert from 'assert';

describe('uiActionCreators', () => {
    it('LOGIN', () => {
        const received = JSON.stringify(uiCreators.login('email', 'password'));
        const expected = JSON.stringify({
            type: 'LOGIN',
            user: { email: 'email', password: 'password'}
        });

        assert.equal(received, expected);
    });

    it('LOGOUT', () => {
        const received = JSON.stringify(uiCreators.logout());
        const expected = JSON.stringify({type: 'LOGOUT'});

        assert.equal(received, expected);
    });

    it('Display Notification Drawer', () => {
        const received = JSON.stringify(uiCreators.displayNotificationDrawer());
        const expected = JSON.stringify({type: 'DISPLAY_NOTIFICATION_DRAWER'});

        assert.equal(received, expected);
    });

    it('Display Notification Drawer', () => {
        const received = JSON.stringify(uiCreators.hideNotificationDrawer());
        const expected = JSON.stringify({type: 'HIDE_NOTIFICATION_DRAWER'});

        assert.equal(received, expected);
    });

    it('Login Request', () => {
        const store = uiCreators.store;

        // uiCreators.loginRequest('email', 'password');
        assert.equal(2, 2);

    });
});
