import React from "react";
import Navbar from "./Navbar";
// import back from "../image/back.jpg";
import "./contact.css";
// const msg=document.getElementById('mesg');
// form.addEventListener("submit", (e) => {
// e.preventDefault();
// fetch(scriptURL, { method: "POST", body: new FormData(form) })
// .then((response) =>  {
//     msg.innerHTML="Message sent seccessfully"
//   setTimeout(function(){
//     msg.innerHTML=""
//   },3000)
//   document.getElementById("client").reset();

const Contact = () => {
  return (
    <>
      <Navbar />
       
      <div className="background">
  <div className="container">
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close"></div>
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT US</span>
          </div>
          <div className="messageto">
          We are here to answer any questions you may have about our combadi experiences. Reach out to us and we'll respond as soon as we can.
          </div>
          {/* <div className="messageto">
          Even if there is something you have always wanted to experience and can't find it on combadi, let us know and we promise we'll do our best to find it for you and send you there.
          </div> */}
          <div className="app-contact">CONTACT INFO : +91 79 055 628 832</div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="NAME" />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="EMAIL"/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="CONTACT NO"/>
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="MESSAGE"/>
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button">CANCEL</button>
              <button className="app-form-button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
     
  </div>
</div>
 
    </>
  );
};

// const scriptURL ="https://script.google.com/macros/s/AKfycbxjs6gCTrKjUT0tVn13475Xcg-KRArfdRplAILIVk3h-yvCb7gM9MDFIXH7ppbBVOeu/exec";
// const form = document.forms["submit-to-google-sheet"];
//  const msg=document.getElementById('mesg');
// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => {
//       msg.innerHTML="Message sent seccessfully"
//       setTimeout(function(){
//             msg.innerHTML=""
//           },2000)
//           form.reset();
//     })
//     .catch(error => console.error('Error!', error.message))
// })

export default Contact;
