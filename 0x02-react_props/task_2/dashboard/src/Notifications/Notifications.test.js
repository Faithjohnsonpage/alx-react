import React from 'react';
import { render, screen } from "@testing-library/react";
import Notifications from './Notifications';

describe("#Notifications", () => {
  test('Notifications renders without crashing', () => {
	render(<Notifications />);
  });

  test("Notifications renders three NotificationItem components", () => {
    render(<Notifications />);
    const notificationItems = screen.getAllByText(/New course available|New resume available|Urgent requirement/i);
    expect(notificationItems.length).toBe(3);
  });

  test("NotificationItem components have the correct data-notification-type attribute", () => {
    render(<Notifications />);
    
    const defaultItem = screen.getByText(/New course available/i);
    const urgentItem = screen.getByText(/New resume available/i);

    expect(defaultItem.closest('li')).toHaveAttribute('data-notification-type', 'default');
    expect(urgentItem.closest('li')).toHaveAttribute('data-notification-type', 'urgent');
  });

  test('Notifications renders the text Here is the list of notifications', () => {
	render(<Notifications />);
	const paragraphElement = screen.getByText(/Here is the list of notifications/i);
	expect(paragraphElement).toBeInTheDocument();
  });

  test("First NotificationItem renders the correct HTML", () => {
    const { container } = render(<Notifications />);
    const firstNotificationItem = container.querySelector("li");

    expect(firstNotificationItem).not.toBeNull();
    expect(firstNotificationItem).toHaveAttribute("data-notification-type", "default");
    expect(firstNotificationItem).toHaveTextContent("New course available");
  });
});
