import * as user from '../../dist/login-success.json';

export function bound(func) {
    return func;
}

export function ping(any) {
    const response = {
        json: () => user
    }

    return new Promise((resolve, reject) => {
        if (!user) reject("Bad connection");
        setTimeout(() => {
            resolve(response);
        }, 250);
    });
}
