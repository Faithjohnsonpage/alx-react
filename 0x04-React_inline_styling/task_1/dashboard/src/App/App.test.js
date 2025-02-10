import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    render(<App isLoggedIn={false} />);
  });

  test("App should render a div with the class App-header", () => {
    render(<App isLoggedIn={false} />);
    const headerDiv = screen.getByTestId('app-header');
    expect(headerDiv).toHaveClass('App-header');
  });
 
  test("App should render a div with the class App-footer", () => {
    render(<App isLoggedIn={false} />);
    const headerDiv = screen.getByTestId('app-footer');
    expect(headerDiv).toHaveClass('App-footer');
  });

  test('that the Login component is included', () => {
	render(<App isLoggedIn={false} />);
	const paraElement = screen.getByText('Login to access the full dashboard');
	expect(paraElement).toBeInTheDocument();
  });

  describe('#When isLoggedIn is true', () => {
    test('that the CourseList component is included', () => {
      render(<App isLoggedIn={true} />);
	    const tableElement = screen.getByRole('table');
      expect(tableElement).toBeInTheDocument();
  	});

    test('that CourseList table is displayed', () => {
      render(<App isLoggedIn={true} />);
      const tableElement = screen.getByRole('table');
      expect(tableElement).toBeInTheDocument();
    });
  });

  describe("App Component", () => {
    let originalAlert;

    beforeAll(() => {
      // Store the original window.alert
      originalAlert = window.alert;
      // Replace window.alert with a mock function
      window.alert = jest.fn();
    });

    afterAll(() => {
      // Restore original window.alert after all tests
      window.alert = originalAlert;
    });

    test("calls logOut and displays alert when Ctrl + h is pressed", async () => {
      const user = userEvent.setup();
      const logOutMock = jest.fn();
      const alertMock = jest.spyOn(window, "alert");

      render(<App logOut={logOutMock} />);

      await user.keyboard('{Control>}h{/Control}');

      expect(alertMock).toHaveBeenCalledWith("Logging you out");
      expect(logOutMock).toHaveBeenCalled();

      alertMock.mockRestore(); // Clean up mock
    });
  });
});
