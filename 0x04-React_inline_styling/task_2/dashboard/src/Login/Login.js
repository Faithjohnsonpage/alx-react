import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  paragraphPadding: {
    paddingLeft: 60,
  },
  labelPaddingLeft: {
    paddingLeft: 60,
    paddingRight: 10,
  },
  labelPadding: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonSpacing: {
    marginLeft: 10,
  },
  container: {
    minHeight: "calc(100vh - 480px)",
  },
});

export default function Login() {
  return (
    <>
      <div className={css(styles.container)} data-testid="app-body">
        <p className={css(styles.paragraphPadding)}>Login to access the full dashboard</p>
        <label htmlFor="email" className={css(styles.labelPaddingLeft)}>Email:</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password" className={css(styles.labelPadding)}>Password:</label>
        <input type="password" name="password" id="password" />
        <button className={css(styles.buttonSpacing)}>OK</button>
      </div>
    </>
  );
}
