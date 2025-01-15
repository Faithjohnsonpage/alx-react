import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import Notifications from './Notifications/Notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
const rootNotifications = ReactDOM.createRoot(document.getElementById('root-notifications'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

rootNotifications.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);
