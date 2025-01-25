import React from "react";
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import PropTypes from "prop-types";

function App({ isLoggedIn = false }) {
  return (
    <>
	  <Notifications displayDrawer={true}/>
      <Header />
	  <hr />
	  {!isLoggedIn ? <Login /> : <CourseList />}
	  <hr />
	  <Footer />
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}

export default App;
