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
            const notification = data[id];
            assert.equal(notification.type, type);
            assert.equal(notification.value, value);
        }
    });

    it('getUnreadNotifications', () => {
        state = notificationReducer(state, actions.markAsRead(1));
        state = notificationReducer(state, actions.markAsRead(2));

        const unread = selectors.getUnreadNotifications(state).toJSON();
        assert.equal(unread['1'], undefined);
        assert.equal(unread['2'], undefined);

        const [{id, type, value, html}] = listNotifications.filter(item => (item.id === 3));
        assert.equal(unread['3'].isRead, false);
        assert.equal(unread['3'].id, id);
        assert.equal(unread['3'].type, type);
        assert.equal(unread['3'].value, value);
        assert.equal(unread['3'].html, html);
    });
});
