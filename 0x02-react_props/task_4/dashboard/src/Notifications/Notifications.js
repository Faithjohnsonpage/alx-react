import React from "react";
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

export default function Notifications({ displayDrawer = false }) {
  return (
    <>
	  <div className="notifications-container">
		  <div className="menuItem">
			<p>Your notifications</p>
		  </div>
		  {displayDrawer && (
			<div className="Notifications" style={{position: "relative"}}>
			  <p>Here is the list of notifications</p>
			  <ul>
				<NotificationItem type="default" value="New course available" />
				<NotificationItem type="urgent" value="New resume available" />
				<NotificationItem html={{__html: getLatestNotification()}} />
			  </ul>
			  <button
				style={{
				  position: "absolute",
				  top: "10px",
				  right: "5px",
				  background: "transparent",
				  border: "none",
				  cursor: "pointer",
				  fontSize: "12px"
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
};
