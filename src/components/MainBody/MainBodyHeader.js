import React from "react";
import "./MainBodyHeader.css";

const MainBodyHeader = () => (
  <div className="main-body-header-container">
    <h3 className="body-title">Our Employees</h3>
    <div className="main-body-header-right">
      <div className="sort-box">
        <label className="sort-title">Sort by: </label>
        <select>
          <option value="firstName">First Name</option>
          <option value="age">Age</option>
        </select>
      </div>
      <div>
        <label>Search</label>
        <input />
      </div>
    </div>
  </div>
);

export default MainBodyHeader;
