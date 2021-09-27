import {Map} from 'immutable';

const filterTypeSelected = (state) => state.get('filter');

const getNotifications = (state) => state.get('notifications');

const getUnreadNotifications = (state) => {
    const notifications = getNotifications(state);
    const unread = notifications.filter(x => x.isRead == false);
    return unread;
};

export {filterTypeSelected, getNotifications, getUnreadNotifications};
