import React from "react";
import PropTypes from "prop-types";

export default function NotificationItem({ type = "default", value, html }) {
  if (html) {
    return (
      <li 
        dangerouslySetInnerHTML={html}
      />
    );
  }
  
  return (
    <li data-notification-type={type}>
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  type: PropTypes.string,
  value: PropTypes.string
};
