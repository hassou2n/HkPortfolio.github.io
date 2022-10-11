import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="Contact">
      <div className="ContactContainer">
        <h1 className="Tittle">Contact</h1>

        <div className="FormContainer">
          <form
            class="form"
            action="https://htmlFormsubmit.co/husseinosamah2@gmail.com"
            method="POST"
          >
            <input className="None" type="text" name="_honey" />

            <input type="hidden" name="_captcha" value="false" />

            <input type="hidden" name="_next" value="" />
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
            <p className="Button">
              <button type="submit">Send Message</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
