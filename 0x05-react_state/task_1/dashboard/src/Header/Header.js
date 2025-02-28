import React, { useContext } from "react";
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from "aphrodite";
import { AppContext } from '../App/AppContext';

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    padding: "1rem",
    gap: "1rem"
  },
  heading: {
    color: "#F03D2B",
    margin: 0,
    '@media (max-width: 900px)': {
      fontSize: "1.5rem"
    },
    '@media (min-width: 901px)': {
      fontSize: "2rem"
    }
  },
  imgWrapper: {
    flexShrink: 0,
    '@media (max-width: 900px)': {
      width: "200px",
      height: "200px"
    },
    '@media (min-width: 901px)': {
      width: "400px",
      height: "400px"
    }
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain"
  },
  logoutLink: {
    cursor: 'pointer',
    textDecoration: 'underline'
  }
});

export default function Header() {
  const { user, logOut } = useContext(AppContext);

  return (
    <header className={css(styles.header)} data-testid="app-header">
      <div className={css(styles.imgWrapper)}>
        <img 
          className={css(styles.img)} 
          src={logo} 
          alt="ALX Logo" 
        />
      </div>
      <h1 className={css(styles.heading)}>School dashboard</h1>
      {user.isLoggedIn && (
        <div id="logoutSection">
          Welcome {user.email} (<span 
            onClick={logOut} 
            className={css(styles.logoutLink)}
          >
            logout
          </span>)
        </div>
      )}
    </header>
  );
}
