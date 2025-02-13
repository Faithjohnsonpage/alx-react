import React, { Component } from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

const opacityKeyframes = {
  'from': {
    opacity: 0.5,
  },
  'to': {
    opacity: 1,
  }
};

const bounceKeyframes = {
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  }
};

const styles = StyleSheet.create({
  container: {
    float: "right",
    position: 'relative',
    padding: '10px',
    marginRight: '20px',
    width: 'fit-content'
  },
  menuItem: {
    float: 'right',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    padding: '8px',
    position: 'relative',
    zIndex: 1,
    ':hover': {
      animationName: [opacityKeyframes, bounceKeyframes],
      animationDuration: ['1s', '0.5s'],
      animationIterationCount: [3, 3],
      animationTimingFunction: 'ease'
    }
  },
  paragraphAlign: {
    textAlign: "right",
    cursor: "pointer",
    margin: 0
  },
  notificationsContainer: {
    border: "1px dashed lightcoral",
    padding: '10px',
    position: 'absolute',
    top: '45px',
    right: 0,
    width: 450,
    fontSize: '20px',
    backgroundColor: 'white',
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
      <div className={css(styles.container)}>
        <div className={css(styles.menuItem)} data-testid="menu-item">
          <p className={css(styles.paragraphAlign)} onClick={this.toggleNotifications}>Your notifications</p>
        </div>
        {displayDrawer && (
          <div id="notifications" className={css(styles.notificationsContainer)}>
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
