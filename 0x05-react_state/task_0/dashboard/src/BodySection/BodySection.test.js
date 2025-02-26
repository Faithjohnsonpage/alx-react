import React from "react";
import { render, screen } from '@testing-library/react';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("#BodySection", () => {
  test("that component renders correctly the children and one h2 element", () => {
    render(
      <BodySection title="test title">
      <p>test children node</p>
      </BodySection>
    );

    const headingElements = screen.getAllByRole("heading", { level: 2 });
    expect(headingElements).toHaveLength(1);
    expect(headingElements[0]).toHaveTextContent("test title");

    const paragraphElements = screen.getAllByText("test children node");
    expect(paragraphElements).toHaveLength(1);
    expect(paragraphElements[0]).toBeInTheDocument();
  });
});
