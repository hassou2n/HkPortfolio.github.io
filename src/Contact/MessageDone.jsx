/** @format */

import React from "react";

export const MessageDone = () => {
  return (
    <div>
      <p>
        Your message has been sent.
        <br />
        Thank you!
        <br />I will get back to you as soon as I can.
      </p>
      <p>
        <a href="/">
          <button className="btn btn-primary">Go Back!</button>
        </a>
      </p>
    </div>
  );
};
