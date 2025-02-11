import React from "react";
import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('#CourseList', () => {
  const listCourses = [
	{id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ]

  it('renders CourseList component without crashing', () => {
	render(<CourseList />);
  });

  it('renders the 5 different rows', () => {
	render(<CourseList listCourses={listCourses} />);
	const rows = screen.getAllByRole('row');
	expect(rows.length).toBe(5);
  });

  test('that CourseList renders correctly if you pass an empty array', () => {
	render(<CourseList listCourses={[]} />);
	const rowElement = screen.getByText('No course available yet');
	expect(rowElement).toBeInTheDocument();
  });
});
