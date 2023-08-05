import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a div with the class App-header', () => {
    const wrapper = mount(<App />);
    const appHeader = wrapper.find('[data-testid="app-header"]');
    expect(appHeader.exists()).toBe(true);
  });

  it('renders a div with the class App-body', () => {
    const wrapper = mount(<App />);
    const appBody = wrapper.find('[data-testid="app-body"]');
    expect(appBody.exists()).toBe(true);
  });

  it('renders a div with the class App-footer', () => {
    const wrapper = mount(<App />);
    const appFooter = wrapper.find('[data-testid="app-footer"]');
    expect(appFooter.exists()).toBe(true);
  });
});
