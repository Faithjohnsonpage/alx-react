import React from "react";
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';

export default function Notifications() {
  return (
    <div className="Notifications" style={{position: "relative"}}>
      <p>Here is the list of notifications</p>
	  <ul>
	    <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
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
  );
}
