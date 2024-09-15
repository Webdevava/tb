import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="social-icons">
       <form>
          <div className="otpsendgmail">
            <h1>Password Reset</h1>
            <p className="p4">Your password has been successfully changed, click here to log in.
            </p>
            {/* <input type='passwoard' className="vtext" placeholder="New Passwoard"></input>
            <input type='passwoard' className="vtext" placeholder="Confirm Passwoard"></input> */}
            <button className="btn7">
             Sign in
            </button> 
            
          </div>
        </form>
    </div>
  );
}

export default App;
