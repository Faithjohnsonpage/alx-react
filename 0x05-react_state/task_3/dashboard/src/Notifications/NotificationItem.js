import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  default: {
    color: "blue",
  },
  urgent: {
    color: "red",
  },
  listItem: {
    cursor: "pointer",
    '@media (max-width: 900px)': {
      width: '100%',
      borderBottom: '1px solid black',
      fontSize: '20px',
      padding: '10px 8px',
    }
  }
});

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, markNotificationAsRead, id } = this.props;
    
    if (html) {
      return (
        <li 
          className={css(styles.listItem)}
          dangerouslySetInnerHTML={html}
          onClick={() => markNotificationAsRead(id)}
        />
      );
    }
    
    return (
      <li
        className={css(
          styles.listItem,
          type === "urgent" ? styles.urgent : styles.default
        )}
        data-notification-type={type}
        onClick={() => markNotificationAsRead(id)}
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
  markNotificationAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  type: "default",
  markNotificationAsRead: () => {},
  id: 0
};

export default NotificationItem;
