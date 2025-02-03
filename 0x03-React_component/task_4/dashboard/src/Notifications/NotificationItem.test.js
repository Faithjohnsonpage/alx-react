import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import NotificationItem from './NotificationItem';

describe("#NotificationItem test", () => {
  test('that NotificationItem renders without crashing', () => {
	  render(<NotificationItem />);
  });

  test('that by passing dummy type and value props, it renders the correct html', () => {
	  render(<NotificationItem type="default" value="test"/>);
	  const listItem = screen.getByText(/test/i);
	  expect(listItem).toBeInTheDocument();
  });

  test('that by passing a dummy html prop, it renders the correct html', () => {
	  render(<NotificationItem html={{__html: "<u>test</u>"}} />);
	  const listItem = screen.getByText('test');
	  expect(listItem).toContainHTML('<u>test</u>');
  });

  test('that the markAsRead property is called with the right ID argument', async () => {
    const markAsReadMock = jest.fn();
    const user = userEvent.setup();
  
    // Render component with the mock function and an id
    render(
      <NotificationItem 
        type="default" 
        value="test" 
        markAsRead={markAsReadMock}
        id={1}
      />
    );

    const notification = screen.getByText('test');
    await user.click(notification);

    expect(markAsReadMock).toHaveBeenCalledWith(1);
  });
});
