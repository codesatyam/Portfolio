import React from "react";
import Navbar from "./Navbar";
// import back from "../image/back.jpg";
import pic from "../image/pic.jpeg";
import "./about.css";
// import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="head-about">
      <div className="about">
      <div className="left-about">
      <section class="CV-page" id="experience">
            <div class="CV-grid">
                <div class="CV-grid-column">
                    <div class="CV-jobs">
                        <h2 class="exp-head">Relevant Experience</h2>
                        <section class="CV-timeline CV-job">
                            <h3 class=" "><span class="">Teaching Assistant</span><span class="post">Coding Ninjas, India, </span><small class="post">Jan 2023 - Present</small></h3>
                            <ul class="CV-timeline-details">
                                <li class="CV-job-timeline-item">Evaluating Projects of web development.</li>
                                <li class="CV-job-timeline-item">Clearing Doubts of Student.</li>
                                <li class="CV-job-timeline-item">Work as mentor.</li>
 
                            </ul>
                        </section>
                        <section class="CV-timeline CV-job">
                            <h3 class=""><span class="">Problem Setter</span>&#8211; <span class="post">imochawork, India,</span><small class="post"> Aug 2022 - Present</small></h3>
                            <ul class="CV-timeline-details">
                                <li class="CV-timeline-details-item">Creating Problems on Data structure and Algorithms.</li>
                                <li class="CV-timeline-details-item">Problem setting in Coding</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </section>
      {/* <div className="heading">
        <h3>About me</h3>
      </div> */}
      </div>
         
           
          <div className="right-about">
          <div className="img_self">
          <img className="pic" src={pic} alt="" />
          </div>
            
          <h3>ABOUT ME</h3>
            <div className="info_my">
            <div class="Third"><b>Hi,I am 3rd Year student of B.Tech</b></div>
            <div class="cse"> in Computer Science & Engineering </div>
            </div> 
             <div className="intr">
             <p >I am Web developer and competitive programmer.
            I am looking for internship in Software development and Web development</p>
            </div>     

          </div>
        </div>
      </div>
       
    </>
  );
};

export default About;
