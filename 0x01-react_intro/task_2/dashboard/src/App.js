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
        <p className="indent">Login to access the full dashboard</p>
	    <label htmlFor="email" className="shift">Email:</label>
	    <input type="email" name="email" id="email" />
	    <label htmlFor="password" className="pad">Password:</label>
	    <input type="password" name="password" id="password" />
	    <button className="margi">OK</button>
      </div>
	  <hr />
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </>
  );
}

export default App;
