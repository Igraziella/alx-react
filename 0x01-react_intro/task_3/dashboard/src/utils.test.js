import React from 'react';
import { render } from '@testing-library/react'
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', () => {
  test('returns correct year', () => {
    const currentYear = getFullYear();
    const expectedYear = new Date().getFullYear();
    expect(currentYear).toBe(expectedYear);
  });
});

describe('getFooterCopy', () => {
  test('returns the correct string', () => {gh
    const footerCopyIndex = getFooterCopy(true);
    const footerCopyDashboard = getFooterCopy(false);
    expect(footerCopyIndex).toBe('Holberton School');
    expect(footerCopyDashboard).toBe('Holberton School main dashboard');
  });
});

describe('getLastestNotification', () => {
test('getLatestNotification returns the correct string', () => {
    const latestNotification = getLatestNotification();
    expect(latestNotification).toBe(
      '<strong>Urgent requirement</strong> - complete by EOD'
    );
  });
});
