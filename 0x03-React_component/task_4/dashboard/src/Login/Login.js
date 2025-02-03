import React from "react";
import './Login.css';

export default function Login() {
  return (
    <>
	  <div className="App-body" data-testid="app-body">
        <p className="indent">Login to access the full dashboard</p>
	    <label htmlFor="email" className="shift">Email:</label>
	    <input type="email" name="email" id="email" />
	    <label htmlFor="password" className="pad">Password:</label>
	    <input type="password" name="password" id="password" />
	    <button className="margi">OK</button>
	  </div>
	</>
  )
}
