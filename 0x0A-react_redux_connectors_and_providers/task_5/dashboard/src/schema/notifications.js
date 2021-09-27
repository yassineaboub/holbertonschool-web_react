import * as notifications from '../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity("users");
const message = new schema.Entity("messages", undefined, {idAttribute: 'guid'});
const notification = new schema.Entity("notifications",{
    author: user,
    context: message
});
const normalizeData = normalize(notifications, [notification]);

function getAllNotificationsByUser(userId) {
    const list = normalizeData.entities.notifications;
    const messages = normalizeData.entities.messages;

    const results = [];

    for (const key in list) {
        const message = list[key];
        const {author, context} = message;
        if (author === userId) results.push(messages[context]);
    }

    return results;
}

function notificationsNormalizer(data) {
    return normalize(data, [notification]);
}

export { normalizeData, getAllNotificationsByUser, notificationsNormalizer };
