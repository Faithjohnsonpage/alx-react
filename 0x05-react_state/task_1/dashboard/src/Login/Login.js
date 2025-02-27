import React, { useState } from "react";
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

export default function Login({ logIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    logIn();
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    checkEnableSubmit(e.target.value, password);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    checkEnableSubmit(email, e.target.value);
  };

  // Function to check if submit should be enabled
  const checkEnableSubmit = (email, password) => {
    if (email.trim() !== "" && password.trim() !== "") {
      setEnableSubmit(true);
    } else {
      setEnableSubmit(false);
    }
  };

  return (
    <div className={css(styles.container)} data-testid="app-body">
      <p className={css(styles.paragraphPadding)}>Login to access the full dashboard</p>

      <form onSubmit={handleLoginSubmit}>
        <div className={css(styles.formGroup)}>
          <label htmlFor="email" className={css(styles.labelPadding)}>Email:</label>
          <input type="email" value={email} onChange={handleChangeEmail} id="email" required />
        </div>

        <div className={css(styles.formGroup)}>
          <label htmlFor="password" className={css(styles.labelPadding)}>Password:</label>
          <input type="password" value={password} onChange={handleChangePassword} id="password" required />
        </div>

        <input type="submit" value="OK" disabled={!enableSubmit} className={css(styles.buttonSpacing)} />
      </form>
    </div>
  );
}
