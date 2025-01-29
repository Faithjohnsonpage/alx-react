import React, { Component } from "react";
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";


class App extends Component {
  render() {
    const { isLoggedIn } = this.props;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "default", html: { __html: getLatestNotification() } }
    ];

    return (
      <>
        <Notifications displayDrawer={true} listNotifications={listNotifications} />
        <Header />
        <hr />
        {!isLoggedIn ? <Login /> : <CourseList listCourses={listCourses} />}
        <hr />
        <Footer />
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};

export default App;
