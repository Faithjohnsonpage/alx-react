import { render, screen } from '@testing-library/react';
import App from './App';

describe("#App", () => {
  test("App renders without crashing", () => {
    render(<App />);
  });

  test("App should render a div with the class App-header", () => {
    render(<App />);
    const headerDiv = screen.getByTestId('app-header');
    expect(headerDiv).toHaveClass('App-header');
  });

  test("App should render a div with the class App-body", () => {
    render(<App />);
    const headerDiv = screen.getByTestId('app-body');
    expect(headerDiv).toHaveClass('App-body');
  });

  test("App should render a div with the class App-footer", () => {
    render(<App />);
    const headerDiv = screen.getByTestId('app-footer');
    expect(headerDiv).toHaveClass('App-footer');
  });
});
