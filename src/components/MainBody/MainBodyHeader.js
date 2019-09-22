import React from "react";
import PropTypes from "prop-types";
import "./MainBodyHeader.css";

const MainBodyHeader = ({
  search,
  updateSearch,
  handleSortChange,
  selectValue
}) => (
  <div className="main-body-header-container">
    <h3 className="body-title">Our Employees</h3>
    <div className="main-body-header-right">
      <div className="sort-box">
        <label className="sort-title">Sort by:</label>
        <select
          onChange={e => handleSortChange(e)}
          value={selectValue}
          className="select"
        >
          <option value="firstName">First Name</option>
          <option value="age">Age</option>
        </select>
      </div>
      <div className="search-box">
        <label className="search-title">Search</label>
        <input
          type="text"
          value={search}
          className="input"
          onChange={e => updateSearch(e)}
        />
      </div>
    </div>
  </div>
);

MainBodyHeader.propTypes = {
  search: PropTypes.string,
  updateSearch: PropTypes.func,
  handleSortChange: PropTypes.func,
  selectValue: PropTypes.string
};

export default MainBodyHeader;
