import {Map} from 'immutable';

const filterTypeSelected = (state) => state.get('filter');

const getNotifications = (state) => state.get('notifications');

const getUnreadNotifications = (state) => {
    const map = Map(state.get('notifications'));
    return map.filterNot(x => x.isRead == true);
};

export {filterTypeSelected, getNotifications, getUnreadNotifications};
