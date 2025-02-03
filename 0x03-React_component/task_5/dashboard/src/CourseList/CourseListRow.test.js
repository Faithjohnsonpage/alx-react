import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  describe('When isHeader is true', () => {
    test('renders without crashing', () => {
      render(
        <table>
          <tbody>
            <CourseListRow isHeader={true} textFirstCell="test" />
          </tbody>
        </table>
      );
    });

    test('renders one cell with colspan=2 when textSecondCell does not exist', () => {
      render(
        <table>
          <tbody>
            <CourseListRow isHeader={true} textFirstCell="test" />
          </tbody>
        </table>
      );
      
      const thElement = screen.getByRole('rowheader');
      expect(thElement).toHaveAttribute('colSpan', '2');
      expect(thElement).toHaveTextContent('test');
      
      const thElements = screen.getAllByRole('rowheader');
      expect(thElements).toHaveLength(1);
    });

    test('renders two cells when textSecondCell is present', () => {
      render(
        <table>
          <tbody>
            <CourseListRow 
              isHeader={true} 
              textFirstCell="First" 
              textSecondCell="Second" 
            />
          </tbody>
        </table>
      );
      
      const thElements = screen.getAllByRole('rowheader');
      expect(thElements).toHaveLength(2);
      expect(thElements[0]).toHaveTextContent('First');
      expect(thElements[1]).toHaveTextContent('Second');
    });
  });

  describe('When isHeader is false', () => {
    test('renders two td elements within a tr element', () => {
      render(
        <table>
          <tbody>
            <CourseListRow 
              isHeader={false} 
              textFirstCell="First" 
              textSecondCell="Second" 
            />
          </tbody>
        </table>
      );
      
      const tdElements = screen.getAllByRole('cell');
      expect(tdElements).toHaveLength(2);
      expect(tdElements[0]).toHaveTextContent('First');
      expect(tdElements[1]).toHaveTextContent('Second');
      
      const trElement = screen.getByRole('row');
      expect(trElement).toContainElement(tdElements[0]);
      expect(trElement).toContainElement(tdElements[1]);
    });
  });
});
