import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";

describe("#Notifications", () => {
  const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
  ];

  describe("#When displayDrawer is true and listNotifications is not empty", () => {
    test("Notifications renders without crashing", () => {
      render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    });

    test("Notifications renders three NotificationItem components", () => {
      render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
      const notificationItems = screen.getAllByRole("listitem");
      expect(notificationItems.length).toBe(3);
    });

    test("NotificationItem components have the correct data-notification-type attribute", () => {
      render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);

      const defaultItem = screen.getByText(/New course available/i);
      const urgentItem = screen.getByText(/New resume available/i);

      expect(defaultItem.closest("li")).toHaveAttribute("data-notification-type", "default");
      expect(urgentItem.closest("li")).toHaveAttribute("data-notification-type", "urgent");
    });

    test("Notifications renders the text 'Here is the list of notifications'", () => {
      render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
      const paragraphElement = screen.getByText(/Here is the list of notifications/i);
      expect(paragraphElement).toBeInTheDocument();
    });

    test("First NotificationItem renders the correct HTML", () => {
      const { container } = render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
      const firstNotificationItem = container.querySelector("li");

      expect(firstNotificationItem).not.toBeNull();
      expect(firstNotificationItem).toHaveAttribute("data-notification-type", "default");
      expect(firstNotificationItem).toHaveTextContent("New course available");
    });

    test('that function markAsRead is called with the right message', async () => {
      const user = userEvent.setup();
      const readSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

      render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
      const defaultItem = screen.getByText(/New course available/i);

      await user.click(defaultItem);

      expect(readSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
      readSpy.mockRestore();
    });
  });

  describe("#When displayDrawer is true and listNotifications is empty", () => {
    test("Notifications renders correctly if you pass an empty array", () => {
      render(<Notifications displayDrawer={true} listNotifications={[]} />);
    });

    test("renders 'No new notification for now'", () => {
      render(<Notifications displayDrawer={true} listNotifications={[]} />);
      const listElement = screen.getByText("No new notification for now");
      expect(listElement).toBeInTheDocument();
    });
  });

  describe("#When displayDrawer is false", () => {
    test("Notifications renders without crashing", () => {
      render(<Notifications displayDrawer={false} />);
    });

    test("the menu item is being displayed", () => {
      render(<Notifications displayDrawer={false} />);
      const menuItem = screen.getByText("Your notifications");
      expect(menuItem).toBeInTheDocument();
    });
  });

  describe("Notifications component", () => {
    test("does not re-render when updating props with the same list", () => {

      const consoleLogMock = jest.spyOn(console, 'log').mockImplementation(() => {});

      const initialNotifications = [
        { id: 1, type: "default", value: "Notification 1" },
        { id: 2, type: "urgent", value: "Notification 2" },
      ];

      const { rerender } = render(
        <Notifications displayDrawer={true} listNotifications={initialNotifications} />
      );

      rerender(<Notifications displayDrawer={true} listNotifications={initialNotifications} />);

      // Console should not log a re-render message
      expect(console.log).not.toHaveBeenCalledWith(expect.stringContaining("Notification"));

      consoleLogMock.mockRestore();
    });

    test("re-renders when updating props with a longer list", () => {

      const initialNotifications = [
        { id: 1, type: "default", value: "Notification 1" },
      ];

      const { rerender } = render(
        <Notifications displayDrawer={true} listNotifications={initialNotifications} />
      );

      // Add a new notification to the list
      const updatedNotifications = [
        ...initialNotifications,
        { id: 2, type: "urgent", value: "Notification 2" },
      ];

      rerender(<Notifications displayDrawer={true} listNotifications={updatedNotifications} />);

      // Expect the new notification to be in the document
      expect(screen.getByText("Notification 2")).toBeInTheDocument();

    });
  });
});
