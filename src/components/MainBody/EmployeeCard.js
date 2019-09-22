import React from "react";
import "./EmployeeCard.css";

const EmployeeCard = props => (
  <div className="card-box">
    <div className="avatar">
      <img src={props.employee.avatar} alt="avatar" height="150" />
    </div>
  </div>
);

export default EmployeeCard;
