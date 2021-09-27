import App from './App';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import Notification from './Notifications/Notifications';
import React from 'react';
import { shallow, mount, render } from 'enzyme';

describe('App', () => {
    it('Does not crash', () => {
        const wrapper = render(<App />);
        expect(wrapper);
    });

    it('Does not contain CourseList', () => {
        const wrapper = render(<App />);
        const courselist = wrapper.find('#CourseList');
        expect(courselist.length).toBe(0);
    });

    describe('App-header', () => {
        it('App renders div with class App-header', () => {
            const node = shallow(<Header />).render()['0'];
            expect(node.type).toBe('tag');
            expect(node.name).toBe('div');
            expect(node.attribs.class).toBe('App-header');
        });
        
    });

    describe('App-body', () => {
        it('App renders div with class App-body', () => {
            const node = shallow(<Login />).render()['0'];
            expect(node.type).toBe('tag');
            expect(node.name).toBe('div');
            expect(node.attribs.class).toBe('App-body');
        });
    });

    describe('App-footer', () => {
        it('App renders div with class App-footer', () => {
            const node = shallow(<Footer />).render()['0'];
            expect(node.type).toBe('tag');
            expect(node.name).toBe('div');
            expect(node.attribs.class).toBe('App-footer');
        });
    });

    describe('Notifications', () => {
        it('Notifications', () => {
            const node = shallow(<Footer />).render()['0'];
            expect(node);
        });
    });

    describe('Logged In', () => {
        it('Not Login component', () => {
            const wrapper = render(<App isLoggedIn={true}/>);
            const login = wrapper.find('.App-body');
            expect(login.length).toBe(0);
        });

        it('Has CourseList', () => {
            const wrapper = render(<App isLoggedIn={true}/>);
            const courselist = wrapper.find('#CourseList');
            expect(courselist.length).toBe(1);
        });
    });

});
