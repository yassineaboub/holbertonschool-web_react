import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../Utils/utils';
import closeIcon from '../close-icon.png';

import NotificationItem from './NotificationItem';

export const Notification = () => {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type='default' value='New course available' />
        <NotificationItem type='urgent' value='New resume available' />
        <NotificationItem
          type='urgent'
          html={{ __html: getLatestNotification() }}
        />
      </ul>
      <button
        className='close-icon'
        aria-label='Close'
        onClick={() => console.log('Close button has been clicked')}
      >
        <img
          src={closeIcon}
          alt='Close'
          style={{ height: '20px', width: '20px' }}
        />
      </button>
    </div>
  );
};

export default Notification;
