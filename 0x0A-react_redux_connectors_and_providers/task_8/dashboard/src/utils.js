export function getFullYear() {
    return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
    if(typeof isIndex !== "boolean") isIndex = false;
    
    return (isIndex ? 'Holberton School' : 'Holberton School main dashboard');
}

export function getLatestNotification() {
    return {__html: '<strong>Urgent requirement</strong> - complete by EOD'};
}

// dummy course data
export const listCourses = [
    {id: 1, name: "ES6", credit: 60},
    {id: 2, name: "Webpack", credit: 20},
    {id: 3, name: "React", credit: 40}
];

// dummy Notification data
export const listNotifications = [
    {id: 1, type:"default", value: "New course available", isRead: false},
    {id: 2, type: "urgent", value: "New course available", isRead: false},
    {id: 3, type: "urgent", value: "New course available", isRead: false, html: getLatestNotification()}
];