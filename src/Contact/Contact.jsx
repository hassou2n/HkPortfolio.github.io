 /** @format */

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MessageDone } from "./MessageDone";

export default function Contact() {
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
    <div id="fh5co-contact">
      <div className="container">
        <div className="row top-line animate-box">
          <div className="col-md-6 col-md-offset-3 col-md-push-2 text-left fh5co-heading">
            <h2>Say Hello</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="col-md-5 col-md-pull-1 animate-box">
              <div className="fh5co-contact-info">
                <h3>Contact Information</h3>
                <ul>
                  <li className="address">
                    <a href="/">Denmark, Nyborg</a>
                  </li>
                  <li className="phone">
                    <a href="tel://+4542159299">+4542159299</a>
                  </li>
                  <li className="email">
                    <a href="mailto:husseinosamah2@gmail.com">
                      husseinosamah2@gmail.com
                    </a>
                  </li>
                  <li className="url">
                    <a href="http://hkhaleefah.com">www.hkhaleefah.com</a>
                  </li>
                </ul>
              </div>
            </div>
            {isSubmit ? (
               <div className="col-md-7 animate-box">
              <MessageDone />
              </div>
            ) : (
              <div className="col-md-7 animate-box">
                <h3>Get In Touch</h3>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row form-group">
                    <div className="col-md-12">
                      <label for="fname">Name*</label>
                      <input type="text" name="from_name" id="fname" className="form-control" required/>
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-12">
                      <label for="email">Email*</label>
                      <input type="text" name="from_email" id="email" className="form-control" required/>
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-12">
                      <label for="message">Message*</label>
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        className="form-control"
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-primary"
                    />
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
