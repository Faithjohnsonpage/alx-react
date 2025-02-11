import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


describe("#Login", () => {
  test("Login renders without crashing", () => {
    render(<Login />);
  });

  test("Login should render correctly with all inputs and labels", () => {
    render(<Login />);

    const inputElements = screen.getAllByRole('textbox');
    const passwordInput = screen.getByLabelText('Password:');
    const emailInput = screen.getByLabelText('Email:');

    expect(inputElements.length).toBe(1);
    expect(passwordInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();

    // Combine all inputs into a single array to test length
    const allInputs = [...inputElements, passwordInput];
    expect(allInputs.length).toBe(2);
  });
});

