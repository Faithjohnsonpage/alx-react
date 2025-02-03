import React from "react";
import CourseListRow from './CourseListRow';
import './CourseList.css';
import CourseShape from './CourseShape';
import PropTypes from "prop-types";

export default function CourseList({ listCourses = [] }) {
  return (
    <div className="App-body" data-testid="app-body">
      <table>
        <thead>
          <CourseListRow isHeader={true} textFirstCell="Available courses" />
          <CourseListRow
            isHeader={true}
            textFirstCell="Course name"
            textSecondCell="Credit"
          />
        </thead>
        <tbody>
          {listCourses.length === 0 ? (
            <CourseListRow
              isHeader={false}
              textFirstCell="No course available yet"
              textSecondCell={null}
            />
          ) : (
            listCourses.map((course) => (
              <CourseListRow
                key={course.id}
                isHeader={false}
                textFirstCell={course.name}
                textSecondCell={course.credit}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
}
