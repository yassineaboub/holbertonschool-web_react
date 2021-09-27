import React from 'react';
import assert from 'assert';
import { shallow, render } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
    describe('isHeader', () => {
        describe('True', () => {
            it('textSecondCell not set', () => {
                const wrapper = render(
                    <CourseListRow 
                        isHeader={true}
                        textFirstCell="name"
                    />);
    
                const th = wrapper.children()[0];
                assert.equal(th.name, 'th');
                assert.equal(th.attribs.colspan, '2');
            });

            it('textSecondCell set', () => {
                const wrapper = shallow(
                    <CourseListRow 
                        isHeader={true}
                        textFirstCell="name"
                        textSecondCell="value"
                    />);

                const children = wrapper.render().children().toArray();
                const cells = [];
                children.forEach((child) => {
                    const text = child.firstChild.data;
                    cells.push(text);
                });

                assert.equal(cells[0], 'name');
                assert.equal(cells[1], 'value');
            });
        });
    });

    describe('False', () => {
        it('tr w/ correct td', () => {
            const wrapper = shallow(
                <CourseListRow
                    isHeader={false}
                    textFirstCell="name"
                    textSecondCell="value"
                />
            );
            const tr = wrapper.render()[0];
            const cells = [];
            tr.children.forEach((child) => {
                const text = child.children[0];
                cells.push(text.data);
            });

            assert.equal(cells[0], 'name');
            assert.equal(cells[1], 'value');
        });
    });
});
