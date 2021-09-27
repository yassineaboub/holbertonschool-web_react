import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import NotificationItem from './NotificationItem';


describe('NotificationItem', () => {
    it('Renders', () => {
        const wrapper = shallow(<NotificationItem />);
        assert.ok(wrapper);
    });
});
