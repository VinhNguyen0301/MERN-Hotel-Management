import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Card from "react-bootstrap/Card";


class Navbar extends Component {
  render() {
    return (
      <div className=" navbar-background">

        <div className=" nav-style">
          <Link
            to="/"
          >
            MERN AIR-BNB
            </Link>
        </div>

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
        <article className="room">
          <div className="img-container">
            <img alt="single room" />
            <div className="price-top">
              <h6></h6>
              <p>per night</p>
            </div>

          </div>
          <p className="room-info"></p>
        </article>
      </div>
    );
  }
}

export default Navbar;
