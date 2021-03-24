import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className=" navbar-background">
      <div className="btn-position">
        <Link
          to="/register"
          style={{
            width: "140px",
            borderRadius: "3px",
            letterSpacing: "1.5px"
          }}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Register
              </Link>
        <Link
          to="/login"
          style={{
            width: "140px",
            borderRadius: "3px",
            letterSpacing: "1.5px"
          }}
          className="btn btn-large btn-flat waves-effect white black-text"
        >
          Log In
              </Link>
      </div>

    </div>
  );
};


export default Navbar;
