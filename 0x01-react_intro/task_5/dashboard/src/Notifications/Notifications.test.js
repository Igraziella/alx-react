import React from 'react';
import { mount } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders three list items', () => {
    const wrapper = mount(<Notifications />);
    const listItems = wrapper.find('li');
    expect(listItems).toHaveLength(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = mount(<Notifications />);
    const notificationText = wrapper.find('p').text();
    expect(notificationText).toBe('Here is the list of notifications');
  });
});
