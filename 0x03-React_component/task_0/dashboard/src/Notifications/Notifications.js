import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

export default function Notifications({ displayDrawer = false, listNotifications = [] }) {
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
                />
              ) : (
                listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
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

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
