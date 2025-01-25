import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe("#Footer", () => {
  test("Footer renders without crashing", () => {
    render(<Footer />);
  });

  test("Footer renders the text “Copyright”", () => {
    render(<Footer />);
    const copyright = screen.getByText(/copyright/i);
    expect(copyright).toBeInTheDocument();
  });
});
