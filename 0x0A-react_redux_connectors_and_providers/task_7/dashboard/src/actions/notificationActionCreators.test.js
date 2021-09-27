import * as creators from './notificationActionCreators';
import assert from 'assert';

describe('Notification Action Creators', () => {
    it('Mark as read', () =>{
        const received = JSON.stringify(creators.markAsRead(1));
        const expected = JSON.stringify({
            type: 'MARK_AS_READ',
            index: 1
        });

        assert.equal(received, expected);
    });

    it('Set Notification Filter', () => {
        const received = JSON.stringify(creators.setNotificationFilter('DEFAULT'));
        const expected = JSON.stringify({
            type: 'SET_TYPE_FILTER',
            filter: "DEFAULT"
        });

        assert.equal(received, expected);
    });
});
