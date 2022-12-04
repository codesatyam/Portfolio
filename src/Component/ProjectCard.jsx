import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      <div class="container">
          <div class="slide slide1">
            <div class="content">
              <div class="icon">
               <h4 className="title-p">{props.title}</h4>
               <img className="pro-img" src={props.image} alt="Error ,loading" />
                {/* <i class="fa fa-user-circle" aria-hidden="true"></i> */}
              </div>
            </div>
          </div>

          <div class="slide slide2">
            <div class="content bg-dark">
              <h5>{props.subject}</h5>
               <p>{props.f1}</p>
              <p> {props.f2}</p>
              <div className="lin d-flex justify-content-evenly">
              <a  className=" code btn " href={props.Live}>Live</a>
               <a  className="code btn " href={props.Code}>Code</a>
              </div>
                
            </div>
          </div>
        </div>
    </>
  );
};

export default ProjectCard;
