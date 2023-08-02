import { render } from '@testing-library/react';
import App from './App';

test('getFullYear returns correct year', () => {
  render(<App />);
  const currentYear = getFullYear();
  const expectedYear = new Date().getFullYear();
  expect(currentYear).toBe(expectedYear);
});

test('getFooterCopy returns the correct string', () => {
    const footerCopyIndex = getFooterCopy(true);
    const footerCopyDashboard = getFooterCopy(false);
    expect(footerCopyIndex).toBe('Holberton School');
    expect(footerCopyDashboard).toBe('Holberton School main dashboard')
});

test('getLatestNotification returns the correct string', () => {
    const latestNotification = getLatestNotification();
    expect(latestNotification).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});