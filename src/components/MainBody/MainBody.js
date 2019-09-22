import React from "react";
import MainBodyHeader from "./MainBodyHeader";
import EmployeeCard from "./EmployeeCard";
import "./MainBody.css";

const MainBody = ({
  employees,
  search,
  updateSearch,
  handleOpenPopup,
  selectedEmployee,
  isShowPopup,
  selectValue,
  handleSortChange
}) => {
  const filteredEmployees = employees.filter(
    employee => employee.firstName.toLowerCase().indexOf(search) !== -1
  );
  return (
    <div className="main-body-container">
      <MainBodyHeader
        search={search}
        updateSearch={updateSearch}
        handleSortChange={handleSortChange}
        selectValue={selectValue}
      />
      <div className="cards-container">
        {filteredEmployees &&
          filteredEmployees.map(employee => (
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
};

export default MainBody;
