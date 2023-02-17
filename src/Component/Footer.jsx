import React from "react";
import { FaHome, FaPhone, FaMailBulk ,FaFacebook,FaTwitter,FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-cont">
          <div className="left">
            <div className="location">
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <div>
                <p>Bayara,Khalilabad,Sant kabir Nagar</p>
                <p>India-272173</p>
              </div>
            </div>
            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />{" "}
                +91 7905-562-832
              </h4>
              </div>
                <div className="email">
                  <h4>
                    <FaMailBulk
                      size={20}
                      style={{ color: "#fff", marginRight: "2rem" }}
                    />{" "}
                    satyamchaurasiya136@gmail.com
                  </h4>
                </div>
              </div>
              <div className="right ">
              <div>
              <h4><b>About me</b>  </h4>
                <p>Myself Satyam Chaurasiya Web developer. <br />  I enjoy learning new things and working on project.</p>
                <div className="social-link">
                <a href="https://www.facebook.com/satyam.chaurasiya.351/"><FaFacebook
                      size={30}
                      style={{ color: "#fff", marginRight: "2rem" }}
                    /></a>
                    <a href="https://twitter.com/SatyamC31079744"> <FaTwitter
                      size={30}
                      style={{ color: "#fff", marginRight: "2rem" }}
                    /></a>
                     <a href="https://www.linkedin.com/in/satyam-chaurasiya-903039213/"><FaLinkedin
                      size={30}
                      style={{ color: "#fff", marginRight: "2rem" }}
                    /></a>
                      
                </div>
              </div>
              </div>
               
        </div>
        
      </div>
      <p  className="copy">Copyright &copy; 2022 Webतन्त्र</p>
    </>
  );
};

export default Footer;
