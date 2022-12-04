import React from "react";
// import API from "../Api";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import back from "../image/back.jpg";
import image from "../image/weather.jpg";
import port from "../image/portfolio.jpg";
import cal from "../image/calci.jpg";
// import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div >
    <Navbar/>
     <div className="project">
      <div className="back-p">
        <img className="back-project" src={back} alt="" />
      </div>
      <h2>Project</h2>
      <div className="card-section">
      <ProjectCard image={port} title={"Portfolio"} subject={"• Portfolio is created to apply knowlwdge and learn"} f1={"• Tech Stack: React Js, HTML, CSS javascript"} Live="" Code="" />
      <ProjectCard image={image} title={"Weather App"} subject={"• Weather API is used for current data."} f1={"Tech Stack: HTML, CSS, Javascript, Node.js, API"} f2={"• It gives weather information Temperature, cloud type, etc."} Live="https://temp-app-satyam.herokuapp.com/" Code="https://github.com/codesatyam/Weatherapp" />
      <ProjectCard image={cal} title={"Calculator"} subject={"• Simple calculator that perfumes basic mathematical operations."} f1={"• Tech Stack:HTML, CSS, Javascript"} Live="https://codesatyam.github.io/calci/" Code="https://github.com/codesatyam/calci" />
      {/* <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/> */}
      </div>
    </div>
    </div>
  );
};

export default Project;
