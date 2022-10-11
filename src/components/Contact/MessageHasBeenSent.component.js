import React from "react";
import "./MessageHasBeenSent.css";

export const MessageHasBeenSent = () => {
  return (
    <div className="MessageHasBeenSent">
      <div className="MessageHasBeenSentContainer ">
        <div className="MessageContainer ">
          <p>
            Your message has been sent.
            <br />
            Thank you! We will get back to you as soon as we can.
          </p>
        </div>
      </div>
    </div>
  );
};

