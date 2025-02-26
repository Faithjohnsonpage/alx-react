import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  paragraphPadding: {
    marginLeft: 30,
  },
  labelPadding: {
    marginLeft: 30,
    paddingRight: 10,
  },
  buttonSpacing: {
    marginLeft: 30,
  },
  container: {
    minHeight: "calc(100vh - 480px)",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    '@media (max-width: 900px)': {
      flexDirection: "column",
      alignItems: "flex-start",
      minHeight: "unset"
    }
  },
  formGroup: {
    display: "inline-flex",
    alignItems: "center",
    '@media (max-width: 900px)': {
      width: "100%",
      marginBottom: 10
    }
  }
});

export default function Login() {
  return (
    <div className={css(styles.container)} data-testid="app-body">
      <p className={css(styles.paragraphPadding)}>Login to access the full dashboard</p>
      <div className={css(styles.formGroup)}>
        <label htmlFor="email" className={css(styles.labelPadding)}>Email:</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className={css(styles.formGroup)}>
        <label htmlFor="password" className={css(styles.labelPadding)}>Password:</label>
        <input type="password" name="password" id="password" />
      </div>
      <button className={css(styles.buttonSpacing)}>OK</button>
    </div>
  );
}
