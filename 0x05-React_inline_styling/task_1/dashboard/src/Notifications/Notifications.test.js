import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { getLatestNotification } from '../Utils/utils';


import Notification from './Notifications'
import NotificationItem from './NotificationItem';

import sinonChai from 'sinon-chai';
import { spy } from 'sinon';
chai.use(sinonChai);

let i = 0;
let listNotifications = [
  {
    id: i++,
    type: "default",
    value: "New course available",
  },
  {
    id: i++,
    type: "urgent",
    value: "New resume available",
  },
  {
    id: i++,
    type: "urgent",
    html: {__html: getLatestNotification()},
  }
];
let props1 = {
  displayDrawer: false,
};
let props2 = {
  displayDrawer: true,
  listNotifications: listNotifications,
};

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

describe('<Notification />', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Notification />);

    expect(wrapper.exists());
  });

  describe('displayDrawer is true', () => {
    test('has a close button', () => {
      const wrapper = shallow(<Notification {...props2} />);
  
      expect(wrapper.find('img')).to.have.lengthOf(1);
    });
    test('menu item is displayed', () => {
      const wrapper = shallow(<Notification {...props2} />);
      expect(wrapper.render()).to.not.be.an('undefined');


      expect(wrapper.exists(".menuItem")).to.equal(true);


      // const menuItem = wrapper.find('.menuItem');

      // expect(menuItem).to.have.lengthOf(1);
    });

    test('notifications div is displayed', () => {
      const wrapper = shallow(<Notification {...props2} />);
      const notifs = wrapper.find('div.Notifications');

      expect(notifs).to.have.lengthOf(1);
    });
  });

  describe('displayDrawer is false', () => {
    test('menu item is displayed', () => {
      const wrapper = shallow(<Notification {...props2} />);
      const menuItem = wrapper.find('.menuItem');

      expect(menuItem).to.have.lengthOf(1);
    });

    test('notifications div is not displayed', () => {
      const wrapper = shallow(<Notification />);
      const notifs = wrapper.find('div.Notifications');

      expect(notifs).to.have.lengthOf(0);
    });
  });

  describe('listNotifications is empty', () => {
    test('renders correctly if empty array is passed', () => {
      const wrapper = shallow(<Notification />);
      const notifs = wrapper.find(NotificationItem);

      expect(notifs).to.have.lengthOf(0);
    });

    test('renders correctly if listNotifications prop not specified', () => {
      const wrapper = shallow(<Notification />);
      const notifs = wrapper.find(NotificationItem);

      expect(notifs).to.have.lengthOf(0);
    });
  });

  describe('listNotifications is not empty', () => {
    test('renders a list with two items when passed two items', () => {
      const nots = [
        {id: 1, type: "default", value: "x"},
        {id: 2, type: "default", value: "y"}
      ];
      const wrapper = shallow(<Notification displayDrawer={true} listNotifications={nots} />);
      expect(wrapper.find("ul")).to.have.lengthOf(1);
      expect(wrapper.find(NotificationItem)).to.have.lengthOf(2);
    });
  });

  describe('message displays properly', () => {
    const wrapper = shallow(<Notification displayDrawer={true} />);
    const noNewNotifs = wrapper.find('.Notifications p');

    expect(noNewNotifs).to.have.lengthOf(1);
    expect(noNewNotifs.text()).to.equal('No new notifications for now');
  });
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});