import React from 'react';
import './Header.css';
import holberton_logo from './holberton_logo.jpg';

function Header() {
  return (
    <> 
      <div className="App-header" data-testid="app-header">
        <img src={holberton_logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
    </>
  )
}

export default Header;