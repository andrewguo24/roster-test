import React from "react";
import MainBodyHeader from "./MainBodyHeader";
import EmployeeCard from "./EmployeeCard";
import "./MainBody.css";

const MainBody = ({
  employees,
  handleOpenPopup,
  selectedEmployee,
  isShowPopup
}) => (
  <div className="main-body-container">
    <MainBodyHeader />
    <div className="cards-container">
      {employees &&
        employees.map(employee => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            handleOpenPopup={handleOpenPopup}
            selectedEmployee={selectedEmployee}
            isShowPopup={isShowPopup}
          />
        ))}
    </div>
  </div>
);

export default MainBody;
