import React from 'react';
import { render, screen } from "@testing-library/react";
import Notifications from './Notifications';

describe("#Notifications", () => {
  describe('#When displayDrawer is true', () => {
    test('Notifications renders without crashing', () => {
	  render(<Notifications displayDrawer={true} />);
    });

    test("Notifications renders three NotificationItem components ", () => {
      render(<Notifications displayDrawer={true} />);
      const notificationItems = screen.getAllByText(/New course available|New resume available|Urgent requirement/i);
      expect(notificationItems.length).toBe(3);
    });

    test("NotificationItem components have the correct data-notification-type attribute", () => {
      render(<Notifications displayDrawer={true} />);
    
      const defaultItem = screen.getByText(/New course available/i);
      const urgentItem = screen.getByText(/New resume available/i);

      expect(defaultItem.closest('li')).toHaveAttribute('data-notification-type', 'default');
      expect(urgentItem.closest('li')).toHaveAttribute('data-notification-type', 'urgent');
    });

    test('Notifications renders the text Here is the list of notifications', () => {
	  render(<Notifications displayDrawer={true} />);
	  const paragraphElement = screen.getByText(/Here is the list of notifications/i);
	  expect(paragraphElement).toBeInTheDocument();
    });

    test("First NotificationItem renders the correct HTML", () => {
      const { container } = render(<Notifications displayDrawer={true} />);
      const firstNotificationItem = container.querySelector("li");

      expect(firstNotificationItem).not.toBeNull();
      expect(firstNotificationItem).toHaveAttribute("data-notification-type", "default");
      expect(firstNotificationItem).toHaveTextContent("New course available");
    });
  });

  describe('#When displayDrawer is false', () => {
	test('Notifications renders without crashing', () => {
	  render(<Notifications displayDrawer={false} />);
    });

	test('that the menu item is being displayed', () => {
	  render(<Notifications displayDrawer={false} />);
	  const menuItem = screen.getByText('Your notifications');
	  expect(menuItem).toBeInTheDocument();
	});
  });
});
