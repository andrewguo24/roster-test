import React from "react";
import MainBodyHeader from "./MainBodyHeader";
import EmployeeCard from "./EmployeeCard";
import "./MainBody.css";

const MainBody = props => (
  <div className="main-body-container">
    <MainBodyHeader />
    {props.employees &&
      props.employees.map(employee => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
  </div>
);

export default MainBody;
