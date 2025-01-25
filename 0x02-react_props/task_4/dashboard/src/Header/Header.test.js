import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe("#Header", () => {
  test("Header renders without crashing", () => {
    render(<Header />);
  });

  test("Header should render a div with the class App-header", () => {
    render(<Header />);
    const imgElement = screen.getByAltText('ALX Logo');
	const h1Element = screen.getByRole('heading');
    expect(imgElement).toBeInTheDocument();
    expect(h1Element).toBeInTheDocument();
  });
})
