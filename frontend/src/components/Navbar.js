import React, { useState } from 'react';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Studio Kosmos</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item">
                <button className="btn btn-sm btn-light" onClick={() => setShowLogin(true)}>
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <LoginModal show={showLogin} onHide={() => setShowLogin(false)} />
    </>
  );
};

export default Navbar;
