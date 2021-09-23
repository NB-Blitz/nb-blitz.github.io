import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="Header row">
        <div className="col-sm-11 offset-sm-2">
            <img className="m-3 ms-4" src="/logo.png" height="90"></img>
            <a className="btn btn-nav" href="/">Home</a>
            <a className="btn btn-nav" href="/Sponsors">Sponsors</a>
            <a className="btn btn-nav" href="/History">History</a>
            <a className="btn btn-nav" href="/Mentors">Mentors</a>
            <a className="btn btn-nav" href="/Contact">Contact Us</a>
        </div>
    </div>
  );
}

export default Header;
