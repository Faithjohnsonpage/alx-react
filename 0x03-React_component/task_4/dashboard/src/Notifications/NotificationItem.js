import React, { Component } from "react";
import PropTypes from "prop-types";

class NotificationItem extends Component {
  render() {
    const { type, value, html, markAsRead, id } = this.props;

    if (html) {
      return (
        <li 
          dangerouslySetInnerHTML={html}
          onClick={() => markAsRead(id)}
        />
      );
    }
    
    return (
      <li 
        data-notification-type={type}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {},
  id: 0
};

export default NotificationItem;
