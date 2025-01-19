import React from 'react';
import { render, screen } from "@testing-library/react";
import Notifications from './Notifications';

describe("#Notifications", () => {
  test('Notifications renders without crashing', () => {
	render(<Notifications />);
  });

  test('Notifications renders three list items', () => {
	render(<Notifications />);
	const listElement = screen.getAllByRole("listitem");
	expect(listElement.length).toBe(3);
  });

  test('Notifications renders the text Here is the list of notifications', () => {
	render(<Notifications />);
	const paragraphElement = screen.getByText(/Here is the list of notifications/i);
	expect(paragraphElement).toBeInTheDocument();
  });
});
