import React from "react";
import "./EmployeeCard.css";

const EmployeeCard = props => (
  <div className="card-box">
    <div className="avatar">
      <img src={props.employee.avatar} alt="avatar" height="150" />
    </div>
    <div className="employee-info">
      <p className="fullname">
        {props.employee.firstName} {props.employee.lastName}
      </p>
      <p className="bio">{props.employee.bio}</p>
    </div>
  </div>
);

export default EmployeeCard;
