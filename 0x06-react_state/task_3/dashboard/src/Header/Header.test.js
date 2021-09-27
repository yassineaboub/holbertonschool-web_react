import Header from './Header';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { equal as assert } from 'assert';

describe("Header component", () => {
    it('Renders', () => {
        const wrapper = shallow(<Header />);
        assert(true, wrapper.exists());
    });

    it('Has children img & h1', () => {
        const wrapper = shallow(<Header />);
        const node = wrapper.render();
        const children = node.children();

        const img = children[0];
        const h1 = children[1];
        assert('img', img.name);
        assert('h1', h1.name);
    });
});
