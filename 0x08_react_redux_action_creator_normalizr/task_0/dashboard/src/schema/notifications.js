import * as jsonData from '../../notifications.json';

const getAllNotificationsByUser = (userId) => {
  let data = jsonData;
  let result = [];
  for (const [key, notif] of Object.entries(data)) {
    if (notif && notif.author && notif.author.id == userId) {
      result.push(notif.context);
    }
  }
  return result;
};

module.exports = {
  getAllNotificationsByUser,
};
