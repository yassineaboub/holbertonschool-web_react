import Footer from './Footer';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { equal as assert } from 'assert';

describe('Footer', () => {
    it('Renders', () => {
        const wrapper = shallow(<Footer />);
        assert(true, wrapper.exists());
    });

    it('Has Copyright', () => {
        const node = shallow(<Footer />).render().children()['0'];
        const text = node.children[0];
        assert(true, text.data.includes('Copyright'));
    });
});
