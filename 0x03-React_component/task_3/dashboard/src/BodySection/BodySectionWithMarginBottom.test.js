import React from "react";
import { render, screen } from "@testing-library/react";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

// Mock BodySection to check prop passing
jest.mock("./BodySection", () => (props) => (
  <div data-testid="BodySectionMock">
    <h2>{props.title}</h2>
    {props.children}
  </div>
));

describe("#BodySectionWithMarginBottom", () => {
  test("renders BodySection and passes props correctly", () => {
    render(
      <BodySectionWithMarginBottom title="Test Title">
        <p>Test Children</p>
      </BodySectionWithMarginBottom>
    );

    // Check if the mocked BodySection is rendered
    const bodySectionElement = screen.getByTestId("BodySectionMock");
    expect(bodySectionElement).toBeInTheDocument();

    // Check if the title prop is correctly passed
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Test Title");

    // Check if children are rendered correctly
    expect(screen.getByText("Test Children")).toBeInTheDocument();
  });
});
