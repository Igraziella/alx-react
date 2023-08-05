import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App renders without crashing', () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});

test('App renders a div with the class App-header', () => {
  const { getByTestId } = render(<App />);
  const appHeader = getByTestId('app-header');
  expect(appHeader).toBeInTheDocument();
});

test('App renders a div with the class App-body', () => {
  const { getByTestId } = render(<App />);
  const appBody = getByTestId('app-body');
  expect(appBody).toBeInTheDocument();
});

test('App renders a div with the class App-footer', () => {
  const { getByTestId } = render(<App />);
  const appFooter = getByTestId('app-footer');
  expect(appFooter).toBeInTheDocument();
});