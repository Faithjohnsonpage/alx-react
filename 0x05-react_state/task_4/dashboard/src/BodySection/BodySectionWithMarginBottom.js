import React, { Component } from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: 40
  }
});

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

BodySectionWithMarginBottom.defaultProps = {
  children: null,
};

export default BodySectionWithMarginBottom;
