import React from "react";
import './App.css';
import logo from './logo.jpg';

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
        <p>Copyright 2020 - ALX</p>
      </footer>
    </>
  );
}

export default App;
