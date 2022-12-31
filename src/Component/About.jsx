import React from "react";
import Navbar from "./Navbar";
// import back from "../image/back.jpg";
import pic from "../image/pic.jpeg";
// import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="head-about">
      {/* <div className="heading">
        <h3>About me</h3>
      </div> */}
        <div className="about">
          <div className="left-about">
            <img className="pic" src={pic} alt="" />
          </div>
          <div className="right-about">
          <h3>About me</h3>
            <div className="intr">
            <p>Hi,I am 3rd Year student of B.Tech</p> <p> in Computer Science & Engineering </p>
            </div>
            <div className="profession">
            <p >I am Web developer and competitive programmer.
            I am looking for internship in Software development and Web development</p>
            </div> 
             <div className="connect">
             <a className="btn"
                href="/contact"
                target="_blank"
                rel="noreferrer"
              >
                Contact
              </a>
             </div>
            {/* <ul>
            <li className="nav-item">
                <NavLink
                  activeClassName="menu-active"
                  exact
                  className="nav-link"
                  to="/contact"
                >
                  Education
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu-active"
                  exact
                  className="nav-link"
                  to="/contact"
                >
                  Experience
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu-active"
                  exact
                  className="nav-link"
                  to="/contact"
                >
                  Achivement
                </NavLink>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
       
    </>
  );
};

export default About;
