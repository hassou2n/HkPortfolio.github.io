import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="Contact">
      <div className="ContactContainer">
        <h1 className="Tittle">Contact</h1>
        <div className="container">
          <form
            action="https://htmlFormsubmit.co/husseinosamah2@gmail.com"
            method="POST"
          >
            <div className="row input-container">
                <div className="styled-input wide">
                  <label htmlFor="Name">Name</label>
                  <input type="text" name="Name" id="Name" required />
                </div>
                <div className="styled-input wide">
                  <label htmlFor="emailInfo">E-mail</label>
                  <input type="email" name="email" id="emailInfo" required />
              </div>

                <div className="styled-input wide">
                  <label htmlFor="comments">Comments, questions?</label>
                  <textarea
                    id="comments"
                    name="comments,&nbsp;questions"
                    required
                  ></textarea>
                </div>
                <div className="btn-lrg submit-btn">Send Message</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
