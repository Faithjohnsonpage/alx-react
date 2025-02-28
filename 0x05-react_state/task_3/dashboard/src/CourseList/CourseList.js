import React from "react";
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";


const styles = StyleSheet.create({
  table: {
    borderCollapse: "collapse",
    width: "calc(100% - 100px)",
    margin: "auto",
  },
  appBody: {
    minHeight: "calc(100vh - 480px)",
  },
});


export default function CourseList({ listCourses = [] }) {
  return (
    <div className={css(styles.appBody)} data-testid="app-body">
      <table className={css(styles.table)}>
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
