import React from "react";
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  heading: {
    color: "#F03D2B",
    display: "inline-block",
    position: "relative",
    bottom: 200,
  }
});

export default function Header() {
  return (
    <>
      <header>
        <div className="App-header" data-testid="app-header">
          <img src={logo} alt="ALX Logo" width="400" height="400" />
          <h1 className={css(styles.heading)}>School dashboard</h1>
        </div>
      </header>
	</>
  )
}
