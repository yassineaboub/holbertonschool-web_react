import React, { Component } from 'react';
import { mount } from 'enzyme';
import { StyleSheet, StyleSheetTestUtils } from 'aphrodite';

import WithLogging from './WithLogging';
import Login from '../Login/Login';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
console.log = jest.fn();
describe('WithLogging', () => {
  test('console.log called on mount', () => {
    // console.log = jest.fn();

    // const TestWithLogging = WithLogging(() => <p />);
    const wrapper = mount(<WithLogging>
      <p>...</p>
     </WithLogging>);

    expect(console.log).toHaveBeenCalledWith(`Component Component is mounted`);

    wrapper.unmount();

    expect(console.log).toHaveBeenCalledWith(
      `Component Component is going to unmount`
    );

    expect(console.log).toHaveBeenCalledTimes(2);
  });

  test('correctly logs component name', () => {
    // console.log = jest.fn();

    // const LoginWithLogging = WithLogging(Login);
    const wrapper = mount(<WithLogging> <Login />
      </WithLogging>);

    expect(console.log).toHaveBeenCalledWith(`Component Login is mounted`);

    wrapper.unmount();

    expect(console.log).toHaveBeenCalledWith(
      `Component Login is going to unmount`
    );

    expect(console.log).toHaveBeenCalledTimes(2);
  });
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});