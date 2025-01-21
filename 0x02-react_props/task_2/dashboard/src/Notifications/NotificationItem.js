import React from "react";

export default function NotificationItem({ type, value, html }) {
  if (html) {
    return (
      <li 
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  
  return (
    <li data-notification-type={type}>
      {value}
    </li>
  );
}
