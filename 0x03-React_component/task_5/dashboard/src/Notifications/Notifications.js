import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends Component {

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    // Re-render only if the new listNotifications has more items than before
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div className="notifications-container">
          <div className="menuItem">
            <p>Your notifications</p>
          </div>
          {displayDrawer && (
            <div className="Notifications" style={{ position: "relative" }}>
              <p>Here is the list of notifications</p>
              <ul>
                {listNotifications.length === 0 ? (
                  <NotificationItem
                    key="no-notifications-0"
                    type="default"
                    value="No new notification for now"
                    markAsRead={this.markAsRead}
                  />
                ) : (
                  listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      id={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={this.markAsRead}
                    />
                  ))
                )}
              </ul>
              <button
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "5px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "12px",
                }}
                aria-label="Close"
                onClick={() => console.log("Close button has been clicked")}
              >
                X
              </button>
            </div>
          )}
        </div>
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
