import React from 'react';
import { mount } from 'enzyme'; // Import `mount` from Enzyme
import App from './App';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('App component', () => {
  it('renders without errors', () => {
    mount(<App />);
  });
});

describe('getFullYear function', () => {
  it('returns correct year', () => {
    const currentYear = getFullYear();
    const expectedYear = new Date().getFullYear();
    expect(currentYear).toBe(expectedYear);
  });
});

describe('getFooterCopy function', () => {
  it('returns the correct string', () => {
    const footerCopyIndex = getFooterCopy(true);
    const footerCopyDashboard = getFooterCopy(false);
    expect(footerCopyIndex).toBe('Holberton School');
    expect(footerCopyDashboard).toBe('Holberton School main dashboard');
  });
});

describe('getLatestNotification function', () => {
  it('returns the correct string', () => {
    const latestNotification = getLatestNotification();
    expect(latestNotification).toBe(
      '<strong>Urgent requirement</strong> - complete by EOD'
    );
  });
});
