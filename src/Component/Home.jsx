import React from "react";
import ldin from "../image/Linkedin.gif";
import Insta from "../image/Instagram.gif";
import Github from "../image/Github.gif";
import Twt from "../image/Twitter.gif";
import back from "../image/back.jpg";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
// import res from "./RESUME0.pdf";
const Home = () => {
  return (
    <>
     <Navbar/>
      <section id="header" className="bg-dark">
      <div className="back-side">
      <img className="back" src={back} alt="Error" /> 
      </div>
        <div className="home">
          <h1 > Hi, I'm<strong className="brand-name"> Satyam Chaurasiya</strong></h1>
            <h1>Web developer and Competitive Programmer</h1>
          <ul className="d-flex social">
            <li>
              <a
                href="https://www.linkedin.com/in/satyam-chaurasiya-903039213/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={ldin} alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codesatyam"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Github} alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/satyam_84ya_/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Insta} alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/SatyamC31079744"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Twt} alt="" />
              </a>
            </li>
          </ul>
          <div className="link ">
            <a
              href="https://drive.google.com/file/d/1-fJstQb0ek6rcolZ-id6uixQ70nwif7Z/view"
              className="btn-get-started"
            >
              See Resume
            </a>
            <NavLink
              to="/contact"
              className="btn-get-started "
            >
              Contact me
            </NavLink>
          </div>
          
        </div>
        
      </section>
    </>
  );
};

export default Home;
