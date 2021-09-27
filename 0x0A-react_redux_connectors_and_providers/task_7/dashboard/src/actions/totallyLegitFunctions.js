import * as user from '../../dist/login-success.json';
import { normalizeData } from '../schema/notifications';
import * as courses from '../../dist/courses.json';

export function bound(func) {
    return func;
}

export function ping(any, getNotice = false, getCourses = false) {
    const notifications = Object.values(normalizeData.entities.messages);

    let data;
    if (getNotice) data = notifications;
    else if (getCourses) data = courses.default;
    else data = user;

    const response = {
        json: () => data
    }

    return new Promise((resolve, reject) => {
        if (!data) reject("Bad connection");
        setTimeout(() => {
            resolve(response);
        }, 250);
    });
}
