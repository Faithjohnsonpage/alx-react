import React, { Component } from "react";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from "aphrodite";
import { AppContext } from './AppContext';


const styles = StyleSheet.create({
  border: {
    borderTop: "3px solid #F01F0F",
  },
  paragraph: {
    marginLeft: 30,
  }
});


class App extends Component {
  state = {
    displayDrawer: false,
    user: {
      email: "",
      password: "",
      isLoggedIn: false,
    }
  };

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };

  logOut = () => {
    this.setState({
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      }
    });
  };

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.state.logOut(); // Use your logOut function from state
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const { displayDrawer, user } = this.state;

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

    // Create the context value from state
    const contextValue = { user, logOut: this.logOut };

    return (
      <AppContext.Provider value={contextValue}>
        <Notifications
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          listNotifications={listNotifications}
        />
        <Header />
        <hr className={css(styles.border)}/>
        {!user.isLoggedIn ? (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login logIn={this.logIn} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>
        )}
        <BodySection title="News from the School">
          <p className={css(styles.paragraph)}>The school community has been buzzing with excitement...</p>
        </BodySection>
        <hr className={css(styles.border)}/>
        <Footer />
      </AppContext.Provider>
    );
  }
}

export default App;
