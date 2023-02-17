import React from "react";
import { NavLink } from "react-router-dom";
import resume from "./RESUME0.pdf";
import logo from '../image/logo3.png'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-black bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
             <img className="logo" src={logo} alt="Error" /> 
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
              <li className="nav-item  ">
                <NavLink
                  activeClassName="menu-active"
                  exact
                  className="nav-link"
                  to="/Home"
                  
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu-active"
                  exact
                  className="nav-link"
                  to="/project"
                >
                  Project
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  activeClassName="menu-active"
                  className="nav-link"
                  href={resume}
                  target="_self"
                  download="resume1"
                >
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu-active"
                  exact
                  className="nav-link"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  activeClassName="menu-active"
                  exact
                  className="nav-link"
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink
                  activeClassName="menu-active"
                  exact
                  className="nav-link"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
