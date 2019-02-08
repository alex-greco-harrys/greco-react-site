import React from "react";
import "./styles/paragraph.css";

const Paragraph = ({ children }) => {
  return (
    <div className="paragraph">
      <p>{children}</p>
    </div>
  );
};

export default Paragraph;
