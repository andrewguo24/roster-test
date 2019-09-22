import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header-container">
    <h1>{props.companyInfo.companyName}</h1>
    <div className="sub-header-wrapper">
      <p>{props.companyInfo.companyMotto}</p>
      <p>
        <label>Since </label>
        {props.companyInfo.companyEst}
      </p>
    </div>
  </div>
);

export default Header;
