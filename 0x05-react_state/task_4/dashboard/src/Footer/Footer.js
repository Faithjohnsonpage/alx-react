import React, { useContext } from "react";
import './Footer.css';
import { AppContext } from '../App/AppContext';
import getFullYear, { getFooterCopy } from '../utils/utils';

export default function Footer() {
  const {user} = useContext(AppContext)

  return (
    <footer className="App-footer" data-testid="app-footer">
      {user.isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </footer>
  )
}
