import React from "react";
import "./EmployeeDetailPopup.css";

const EmployeeDetailPopup = ({ handleClosePopup, selectedEmployee }) => (
  <div className="popup-container">
    <div className="close-icon" onClick={handleClosePopup}>
      X
    </div>
    <div className="details-container">
      <div className="details-left-box">
        <img src={selectedEmployee.avatar} alt="selected-avatar" height="150" />
        <div className="job-title">{selectedEmployee.jobTitle}</div>
        <div className="age">{selectedEmployee.age}</div>
        <div className="joint-date">
          {selectedEmployee.dateJoined.substr(0, 10)}
        </div>
      </div>
      <div className="details-right-box">
        <div className="name">
          <div className="name-text">
            {selectedEmployee.firstName} {selectedEmployee.lastName}
          </div>
        </div>
        <div className="bio">{selectedEmployee.bio}</div>
      </div>
    </div>
    <div className="left-box">
      {/* <img src={props.employee.avatar} alt="avatar" height="150" /> */}
    </div>
  </div>
);

export default EmployeeDetailPopup;
