import React, { useState } from "react";
import "./Contact.css";
import { MessageHasBeenSent } from "./MessageHasBeenSent.component";

export const Contact = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };

  return (
    <div className="Contact">
      <div className="ContactContainer">
        <h1 className="Tittle">Contact</h1>
        {isSubmit ? (
          <MessageHasBeenSent />
        ) : (
          <div className="FormContainer">
            <form
              class="form"
              action="https://formsubmit.co/fffac22df08494264870d4e128c4058a"
              method="POST"
            >
              <input className="None" type="text" name="_honey" />

              <input type="hidden" name="_captcha" value="false" />

                {/* <input type="hidden" name="_next" value="" /> */}
                
              <p type="Name*">
                <label for="name"></label>
                <input name="name" id="name" required></input>
              </p>
              <p type="Email*">
                <label for="email"></label>
                <input name="email" id="name" required></input>
              </p>
              <p type="Message*">
                <label for="message"></label>
                <textarea name="message" id="message" required></textarea>
              </p>
              <p className="ContactButton">
                <button type="submit" onSubmit={onSubmit}>
                  Send Message
                  {isSubmit}
                </button>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
