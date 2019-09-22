import React from "react";
import MainBodyHeader from "./MainBodyHeader";
import EmployeeCard from "./EmployeeCard";
import "./MainBody.css";

const MainBody = props => (
  <div className="main-body-container">
    <MainBodyHeader />
    <div className="cards-container">
      {props.employees &&
        props.employees.map(employee => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
    </div>
  </div>
);

export default MainBody;
