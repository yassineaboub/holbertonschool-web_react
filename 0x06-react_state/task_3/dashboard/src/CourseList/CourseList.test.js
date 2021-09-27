import React from 'react';
import { shallow, render } from 'enzyme';
import CourseList from './CourseList';
import assert from 'assert';
import { listCourses } from '../utils';

describe('CourseList', () => {
    describe('Renders', () => {
        it('w/o listCourses', () => {
            const wrapper = shallow(<CourseList />);
            assert.equal(wrapper.render().length !== 0, true);
        });

        it('w/ listCourses', () => {
            const wrapper = shallow(<CourseList listCourses={listCourses}/>);
            assert.equal(wrapper.render().length !== 0, true);
        });
    });

    describe('Correctly display courses', () => {
        it('Has three courses', () => {
            const wrapper = shallow(<CourseList listCourses={listCourses}/>);
            const table = wrapper.render()['0'];
            const tr = [];
            table.children.forEach(
                (child) => {
                    const children = child.children;
                    tr.push(...children);
                }
            );
    
            assert.equal(tr.length, 5);
        });

        it('Has no courses', () => {
            const wrapper = shallow(<CourseList />);
            const table = wrapper.render()['0'];
            const tr = [];
            table.children.forEach(
                (child) => {
                    const children = child.children;
                    tr.push(...children);
                }
            );
    
            assert.equal(tr.length, 3);
        });
    });
});
