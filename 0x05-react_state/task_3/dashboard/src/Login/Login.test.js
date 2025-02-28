import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

  test("Submit button is disabled by default", () => {
    render(<Login />);
    const submitButton = screen.getByRole("button", { name: "OK" });

    expect(submitButton).toBeDisabled();
  });

  test("Submit button is enabled after filling both email and password inputs", () => {
    render(<Login />);

    const emailInput = screen.getByLabelText("Email:");
    const passwordInput = screen.getByLabelText("Password:");
    const submitButton = screen.getByRole("button", { name: "OK" });

    // Initially, the submit button should be disabled
    expect(submitButton).toBeDisabled();

    // Simulate user typing in both inputs
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    // Now the submit button should be enabled
    expect(submitButton).toBeEnabled();
  });
});

