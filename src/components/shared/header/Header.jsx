import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="app-header">
      <div className="app-logo">
        <img src="" alt="logo" />
      </div>
      <div className="navbar">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </div>
      <div className="auth-nav">
        <Link to="register" className="auth-link">
            Register
        </Link>
        <Link to="login" className="auth-link">
            Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
