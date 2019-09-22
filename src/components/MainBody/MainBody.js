import React from "react";
import PropTypes from "prop-types";
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

MainBody.propTypes = {
  employees: PropTypes.array,
  search: PropTypes.string,
  updateSearch: PropTypes.func,
  handleOpenPopup: PropTypes.func,
  isShowPopup: PropTypes.bool,
  selectValue: PropTypes.string,
  handleSortChange: PropTypes.func,
  selectedEmployee: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default MainBody;
