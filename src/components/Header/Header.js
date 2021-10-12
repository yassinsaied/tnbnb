import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {

const {logged} = useSelector((state) => state.authReducer)



  return (
    <div className="site-navbar container bkg-trs ">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid d-flex">
          <div className="me-auto">
            <Link className="navbar-brand ms-auto" to="/">
              TnBnB
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  About
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
        <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</span>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="#">Action</Link>
            <Link className="dropdown-item" to="#">Another action</Link>
            <Link className="dropdown-item" to="#">Something else here</Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="#">Separated link</Link>
          </div>
        </li> */}

              <li className="nav-item ms-2 ">
                <Link className="nav-link brl" to="/login">
                  login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Rgister
                </Link>
              </li>

              <li className="nav-item">
                <Link className="btn btn-success" to={logged ? "/" : "/login" }>
                  + Post ADS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
