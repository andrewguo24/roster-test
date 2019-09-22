import React from "react";
import PropTypes from "prop-types";
import "./EmployeeCard.css";

const EmployeeCard = ({
  employee,
  handleOpenPopup,
  selectedEmployee,
  isShowPopup
}) => {
  const highLight = `card-box ${selectedEmployee.id === employee.id &&
    isShowPopup &&
    "highlight"}`;
  return (
    <div className={highLight} onClick={() => handleOpenPopup(employee)}>
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
};

EmployeeCard.propTypes = {
  employee: PropTypes.object,
  handleOpenPopup: PropTypes.func,
  isShowPopup: PropTypes.bool,
  selectedEmployee: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default EmployeeCard;
