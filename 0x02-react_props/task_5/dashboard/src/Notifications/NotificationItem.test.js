import React from "react";
import { render, screen } from '@testing-library/react';
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
});
