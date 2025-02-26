import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  format: {
    marginLeft: 30,
  }
});


class BodySection extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className="bodySection">
        <h2 className={css(styles.format)}>{title}</h2>
        {children}
      </div>
    );
  }
}

BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

BodySection.defaultProps = {
  children: null,
};

export default BodySection;
