import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("#App", () => {
  test("App renders without crashing", () => {
    render(<App />);
  });

  test("App should render a div with the class App-footer", () => {
    render(<App />);
    const headerDiv = screen.getByTestId('app-footer');
    expect(headerDiv).toHaveClass('App-footer');
  });

  test('that the Login component is included', () => {
    render(<App />);
    const paraElement = screen.getByText('Login to access the full dashboard');
    expect(paraElement).toBeInTheDocument();
  }); 
});
