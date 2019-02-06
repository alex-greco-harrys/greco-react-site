import React from "react";
import "./styles/header.css";

const Header = ({ headerLinkText, headerLinkDest }) => {
  return (
    <div className="header">
      <h1>
        <a href={headerLinkDest} className="header-text">
          {headerLinkText}
        </a>
      </h1>
    </div>
  );
};

export default Header;
