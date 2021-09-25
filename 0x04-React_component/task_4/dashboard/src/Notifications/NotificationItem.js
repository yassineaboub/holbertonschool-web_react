import React from 'react';

const NotificationItem = ({ type, html, value }) => {
  if (html === undefined)
    return (
      <li data-notification-type={type} onClick={() => markAsRead(id) }>
      {value}
      </li>
    );
  else
    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
    );
};

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  markAsRead: () => {}
};

export default NotificationItem;
