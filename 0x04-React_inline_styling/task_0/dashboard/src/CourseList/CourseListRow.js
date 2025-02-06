import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";


const styles = StyleSheet.create({
  rowColor: {
    backgroundColor: '#f5f5f5ab'
  },

  rowHeaderColor: {
    backgroundColor: '#deb5b545'
  }
});

export default function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
 if (isHeader) {
    return (
      <tr className={css(styles.rowHeaderColor)}>
        <th scope="row" colSpan={textSecondCell ? 1 : 2}>{textFirstCell}</th>
        {textSecondCell && <th scope="row">{textSecondCell}</th>}
      </tr>
    );
  } else {
    return (
      <tr className={css(styles.rowColor)}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
