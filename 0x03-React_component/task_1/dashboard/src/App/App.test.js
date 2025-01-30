import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("#App", () => {
  test("App renders without crashing", () => {
    render(<App isLoggedIn={false} />);
  });

  test("App should render a div with the class App-header", () => {
    render(<App isLoggedIn={false} />);
    const headerDiv = screen.getByTestId('app-header');
    expect(headerDiv).toHaveClass('App-header');
  });

  test("App should render a div with the class App-body", () => {
    render(<App isLoggedIn={false} />);
    const headerDiv = screen.getByTestId('app-body');
    expect(headerDiv).toHaveClass('App-body');
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
    test("calls logOut and displays alert when Ctrl + h is pressed", () => {
      const logOutMock = jest.fn();
      const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

      render(<App logOut={logOutMock} />);

      userEvent.keyboard("{Control>}{h}{/Control}");

      expect(alertMock).toHaveBeenCalledWith("Logging you out");
      expect(logOutMock).toHaveBeenCalled();

      alertMock.mockRestore(); // Clean up mock
    });
  });
});
