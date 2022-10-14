import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { MessageDone } from "./MessageDone.component";

export const Contact = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l1gfwpi",
        "template_pjsdh7d",
        form.current,
        "JNTumgYcodetCGPJb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmit(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Contact">
      {isSubmit ? (
        <MessageDone />
      ) : (
        <div className="ContactContainer">
          <h1 className="Tittle">Contact</h1>
          <div className="FormContainer">
            <form ref={form} onSubmit={sendEmail}>
              <label>Name*</label>
              <input type="text" name="from_name" required />
              <label>Email*</label>
              <input type="email" name="from_email" required />
              <label>Message*</label>
              <textarea name="message" required />
              <p className="ContactButton">
                <input type="submit" value="Send Message" />
              </p>
            </form>
          </div>
        </div>
      )}
      ;
    </div>
  );
};
