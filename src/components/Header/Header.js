import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ companyInfo }) => {
  const date = new Date(companyInfo.companyEst);
  const year = date.getFullYear();
  const MONTHS = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
  ];
  const month = MONTHS[date.getMonth()];
  const day = date.getDate();
  return (
    <div className="header-container">
      <h1>{companyInfo.companyName}</h1>
      <div className="sub-header-wrapper">
        <p>{companyInfo.companyMotto}</p>
        <p>
          <label>Since </label>
          <span>
            {day}/{month}/{year}
          </span>
        </p>
      </div>
    </div>
  );
};

Header.propTypes = {
  companyInfo: PropTypes.object
};

export default Header;
