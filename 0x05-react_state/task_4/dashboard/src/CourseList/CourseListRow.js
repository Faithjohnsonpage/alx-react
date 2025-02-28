import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  rowColor: {
    backgroundColor: "#f5f5f5ab",
  },
  rowHeaderColor: {
    backgroundColor: "#deb5b545",
  },
  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
  cell: {
    border: "1px solid #cecfd5",
    padding: "10px 15px",
  },
  lastRow: {
    textAlign: "left",
  },
});

export default function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  const [isChecked, setIsChecked] = useState(false);
  
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  if (isHeader) {
    return (
      <tr className={css(styles.rowHeaderColor, textSecondCell ? styles.lastRow : "")}>
        <th scope="row" className={css(styles.cell)} colSpan={textSecondCell ? 1 : 2}>
          {textFirstCell}
        </th>
        {textSecondCell && (
          <th scope="row" className={css(styles.cell)}>{textSecondCell}</th>
        )}
      </tr>
    );
  } else {
    return (
      <tr className={css(isChecked ? styles.rowChecked : styles.rowColor)}>
        <td className={css(styles.cell)}>
          <input 
            type="checkbox" 
            checked={isChecked} 
            onChange={handleCheckboxChange} 
          />
          {textFirstCell}
        </td>
        <td className={css(styles.cell)}>{textSecondCell}</td>
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
