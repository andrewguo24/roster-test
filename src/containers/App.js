import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "../components/Header/Header";
import MainBody from "../components/MainBody/MainBody";
import EmployeeDetailPopup from "../components/Popup/EmployeeDetailPopup";
import * as actionCreators from "../actions";
import "./App.css";

class App extends React.Component {
  state = {
    isShowPopup: false,
    selectedEmployee: [],
    search: "",
    selectValue: ""
  };

  handleOpenPopup = item => {
    this.setState({
      isShowPopup: true,
      selectedEmployee: item
    });
  };

  handleClosePopup = () => {
    this.setState({
      isShowPopup: false
    });
  };

  updateSearch = e => {
    this.setState({
      search: e.target.value.substr(0, 20)
    });
  };

  handleSortChange = e => {
    const { employees } = this.props;
    this.setState({
      selectValue: e.target.value,
      employees: this.descendSort(employees, e.target.value)
    });
  };

  descendSort = (employees, key) => {
    return employees.sort((a, b) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    });
  };

  componentDidMount() {
    this.props.dispatch(actionCreators.requestData());
  }
  render() {
    const { companyInfo, employees } = this.props;
    const { isShowPopup, selectedEmployee, search, selectValue } = this.state;
    return (
      <div>
        <Header companyInfo={companyInfo} />
        <MainBody
          employees={employees}
          handleOpenPopup={this.handleOpenPopup}
          updateSearch={this.updateSearch}
          handleSortChange={this.handleSortChange}
          selectedEmployee={selectedEmployee}
          isShowPopup={isShowPopup}
          search={search}
          selectValue={selectValue}
        />
        {isShowPopup && (
          <EmployeeDetailPopup
            selectedEmployee={selectedEmployee}
            handleClosePopup={this.handleClosePopup}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actionCreators.requestData()),
  dispatch
});

App.propTypes = {
  companyInfo: PropTypes.object,
  employees: PropTypes.array
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
