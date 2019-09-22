import React from "react";
import "./EmployeeCard.css";

const EmployeeCard = ({ employee, handleOpenPopup }) => (
  <div className="card-box" onClick={() => handleOpenPopup(employee)}>
    <div className="avatar">
      <img src={employee.avatar} alt="avatar" height="150" />
    </div>
    <div className="employee-info">
      <p className="name">
        {employee.firstName} {employee.lastName}
      </p>
      <p className="bio">{employee.bio}</p>
    </div>
  </div>
);

export default EmployeeCard;
