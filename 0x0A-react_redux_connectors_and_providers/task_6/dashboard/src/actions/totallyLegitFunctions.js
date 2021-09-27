import * as user from '../../dist/login-success.json';
import { normalizeData } from '../schema/notifications';

export function bound(func) {
    return func;
}

export function ping(any, getNotice = false) {
    const notifications = Object.values(normalizeData.entities.messages);
    const response = {
        json: () => (getNotice ? notifications : user)
    }

    return new Promise((resolve, reject) => {
        if (!user) reject("Bad connection");
        setTimeout(() => {
            resolve(response);
        }, 250);
    });
}
