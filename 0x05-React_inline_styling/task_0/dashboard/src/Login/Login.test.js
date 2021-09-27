import Login from './Login';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { equal as assert } from 'assert';

describe('Login Component', () => {
    it('Renders', () => {
        const wrapper = shallow(<Login />);
        assert(true, wrapper.exists());
    });

    it('Renders 2 inputs and 2 labels', () => {
        const wrapper = shallow(<Login />);
        const node = wrapper.render();
        const children = node.children().toArray();
        let inputs = 0;
        let labels = 0;

        children.forEach((child) => {
            if (child.name === 'input') inputs += 1;
            if (child.name === 'label') labels += 1;
        });

        assert(true, (inputs === 2 && labels === 2));
    });
});
