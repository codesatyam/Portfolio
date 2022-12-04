import React from "react";
import Navbar from "./Navbar";
import back from "../image/back.jpg";
 
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

// })
// .catch((error) => console.error("Error!", error.message));
// });
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="back-sid">
        <img className="back" src={back} alt="Error" />
      </div>
      <div className="head-contact">
        <div className="con">
          <form name="submit-to-google-sheet" id='client'>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="Name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                name="Email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Phone No.
              </label>
              <input
                type="tel"
                name="Phone"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                name="Message"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" class="butt btn btn-light">
              Send
            </button>
          </form>
          <span id="mesg"></span>
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
