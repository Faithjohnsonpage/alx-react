import React from "react";
import './App.css';
import logo from './logo.jpg';
import getFullYear, { getFooterCopy } from './utils';

function App() {
  return (
    <>
      <header>
        <div className="App-header">
          <img src={logo} alt="ALX Logo" width="400" height="400" />
          <h1 className="to-side">School dashboard</h1>
        </div>
      </header>
	  <hr />
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
	  <hr />
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </>
  );
}

export default App;
