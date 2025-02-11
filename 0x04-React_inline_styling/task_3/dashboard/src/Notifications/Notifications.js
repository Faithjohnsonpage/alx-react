import React, { Component } from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";


const styles = StyleSheet.create({
  container: {
    float: "right",
  },
  menuItem: {
    margin: 5,
    paddingRight: 10
  },
  paragraphAlign: {
    textAlign: "right",
    cursor: "pointer"
  },
  notificationsContainer: {
    border: "1px dashed lightcoral",
    padding: 0,
    margin: 10,
    width: 450,
    fontSize: '20px',
    '@media (max-width: 900px)': {
      display: "none",
      width: "100vw",
      height: "100vh",
      backgroundColor: "white",
      border: "none",
      padding: 0,
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 0,
      zIndex: 9999,
      overflowY: "auto"
    }
  },
  visible: {
    '@media (max-width: 900px)': {
      display: "block !important"
    }
  },
  closeButton: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    position: "absolute",
    right: "1rem",
    top: "1rem",
    zIndex: 10000,
    '@media (max-width: 900px)': {
      fontSize: "20px",
      padding: "8px",
      color: "black",
      fontWeight: "bold"
    }
  }
});


class Notifications extends Component {

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    // Re-render only if the new listNotifications has more items than before
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  toggleNotifications = () => {
    const notifications = document.getElementById('notifications');
    if (notifications) {
      notifications.classList.toggle(css(styles.visible));
      document.body.style.overflow = document.body.style.overflow === 'hidden' ? '' : 'hidden';
    }
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div className={css(styles.container)}>
          <div className={css(styles.menuItem)}>
            <p className={css(styles.paragraphAlign)} onClick={this.toggleNotifications}>Your notifications</p>
          </div>
          {displayDrawer && (
            <div id="notifications" className={css(styles.notificationsContainer)} style={{ position: "relative" }}>
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
                className={css(styles.closeButton)}
                aria-label="Close"
                onClick={() => {
                  console.log("Close button has been clicked");
                  this.toggleNotifications();
                }}
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
