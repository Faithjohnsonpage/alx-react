import React from "react";
import logo from '../assets/logo.jpg';
import './Header.css';

export default function Header() {
  return (
    <>
      <header>
        <div className="App-header" data-testid="app-header">
          <img src={logo} alt="ALX Logo" width="400" height="400" />
          <h1 className="to-side">School dashboard</h1>
        </div>
      </header>
	</>
  )
}
