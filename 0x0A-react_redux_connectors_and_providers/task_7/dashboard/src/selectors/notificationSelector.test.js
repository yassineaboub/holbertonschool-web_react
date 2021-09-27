import * as actions from "../actions/notificationActionCreators";
import * as types from "../actions/notificationActionTypes";
import { listNotifications } from "../utils";
import { notificationReducer } from "../reducers/notificationReducer";
import assert from 'assert';
import * as selectors from './notificationSelector';

const fetchAction = {
    type: types.FETCH_NOTIFICATIONS_SUCCESS,
    data: listNotifications
};
let state = notificationReducer(undefined, fetchAction);

describe('Selectors', () => {
    it('filterTypeSelected', () => {
        assert.equal(selectors.filterTypeSelected(state), 'DEFAULT');
        state = notificationReducer(state, actions.setNotificationFilter('URGENT'));
        assert.equal(selectors.filterTypeSelected(state), 'URGENT');
    });

    it('getNotifications', () => {
        const data = selectors.getNotifications(state);

        for (const item of listNotifications) {
            const {id, type, value} = item;
            const notification = data[id - 1];
            assert.equal(notification.type, type);
            assert.equal(notification.value, value);
        }
    });

    it('getUnreadNotifications', () => {
        state = notificationReducer(state, actions.markAsRead(0));
        state = notificationReducer(state, actions.markAsRead(1));

        const unread = selectors.getUnreadNotifications(state);


        const [{id, type, value, html}] = listNotifications.filter(item => (item.id === 3));
        assert.equal(unread[0].isRead, false);
        assert.equal(unread[0].id, id);
        assert.equal(unread[0].type, type);
        assert.equal(unread[0].value, value);
        assert.equal(unread[0].html, html);
    });
});
