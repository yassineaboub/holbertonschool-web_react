import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

describe('<App />', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.exists());
    });
    it('renders App-header div', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.contains(<header className="App-header" />))
    });
    it('renders App-body div', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.contains(<main className="App-body" />))
    });
    it('renders App-footer div', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.contains(<footer className="App-header" />))
    });
  
});
