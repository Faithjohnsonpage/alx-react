import React, { Component } from "react";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from "aphrodite";


const styles = StyleSheet.create({
  border: {
    borderTop: "3px solid #F01F0F",
  },
  paragraph: {
    marginLeft: 30,
  }
});


class App extends Component {
  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const { isLoggedIn } = this.props;

    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "default", html: { __html: getLatestNotification() } },
    ];

    return (
      <>
        <Notifications displayDrawer={true} listNotifications={listNotifications} />
        <Header />
        <hr className={css(styles.border)}/>
        {!isLoggedIn ? (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>
        )}

        <BodySection title="News from the School">
          <p className={css(styles.paragraph)}>The school community has been buzzing with excitement as students and faculty members celebrate a series of achievements this semester. Academic performances have reached new heights, with several students receiving national and international recognition for their research projects and innovations. Faculty members have also contributed significantly through groundbreaking studies, fostering an environment of intellectual curiosity and excellence. The administration continues to support these efforts by providing enhanced resources and funding opportunities for students to explore their full potential.</p>
        </BodySection>

        <hr className={css(styles.border)}/>
        <Footer />
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
