/** @format */

import React, { useState } from "react";

export const LearnMore = ({ children }) => {
  const text = children;
  const [isLearnMore, setIsLearnMore] = useState(true);
  const toggleLearnMore = () => {
    setIsLearnMore(!isLearnMore);
  };
  return (
    <p className="text">
      {isLearnMore ? text.slice(0, 0) : text}
      <button onClick={toggleLearnMore} className="btn btn-primary btn-outline">
        {isLearnMore ? "Learn more" :"show less"}
      </button>
    </p>
  );
};
