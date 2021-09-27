import { notificationReducer } from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';
import * as validActions from '../actions/notificationActionCreators';
import * as invalidActions from '../actions/uiActionCreator';
import { listNotifications } from '../utils';
import assert from 'assert';

listNotifications

const fetchAction = {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data: listNotifications
};

describe('Notifications Reducer', () => {
    it('No action', () => {
        const state = notificationReducer(undefined, undefined).toJSON();

        assert.equal(state.filter, '');
        assert.equal(state.notifications.length, 0);
    });

    it('Invalid Action', () => {
        const state = notificationReducer(undefined, invalidActions.login()).toJSON();

        assert.equal(state.filter, '');
        assert.equal(state.notifications.length, 0);
    });

    it('Fetch Notification Success', () => {
        const state = notificationReducer(undefined, fetchAction).toJSON();
        const notifications = Object.entries(state.notifications);
        
        assert.equal(state.filter, 'DEFAULT');
        assert.equal(notifications.length, listNotifications.length);

        for (const [key, item] of notifications) {
            const {id, type, value, isRead, html} = item;
            assert.equal(isRead, false);

            listNotifications.forEach((notification) => {
                if (notification.id === id) {
                    assert.equal(notification.type, type);
                    assert.equal(notification.value, value);
                    assert.equal(notification.html, html);
                }
            });
        }
    });

    it('Mark as Read', () => {
        let state = notificationReducer(undefined, fetchAction);
        assert.equal(Object.entries(state.toJSON().notifications).length > 0, true);
        state = notificationReducer(state, validActions.markAsRead(1));
        assert.equal(state.toJSON().notifications['1'].isRead, true);
    });

    it('Set Type filter DEFAULT', () => {
        let state = notificationReducer(undefined, fetchAction);
        assert.equal(Object.entries(state.toJSON().notifications).length > 0, true);
        state = notificationReducer(state, validActions.setNotificationFilter("URGENT"));
        assert.equal(state.toJSON().filter, "URGENT");
        state = notificationReducer(state, validActions.setNotificationFilter("DEFAULT"));
        assert.equal(state.toJSON().filter, "DEFAULT");
    });
});
