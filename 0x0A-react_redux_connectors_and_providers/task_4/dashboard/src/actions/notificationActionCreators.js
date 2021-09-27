import * as types from './notificationActionTypes';
import { bound } from './totallyLegitFunctions';

export function markAsRead(index) {
    const type = types.MARK_AS_READ;
    return {type, index};
}

export function setNotificationFilter(filter) {
    const type = types.SET_TYPE_FILTER;
    return {type, filter};
}

const boundMarkAsRead = bound(markAsRead);
const boundSetNotificationFilter = bound(setNotificationFilter);

export {boundMarkAsRead, boundSetNotificationFilter};
