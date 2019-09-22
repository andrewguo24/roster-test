import React from "react";
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
    selectedEmployee: []
  };

  handleOpenPopup = item => {
    console.log("item", item);
    this.setState({
      isShowPopup: true,
      selectedEmployee: item
    });
  };

  handleClosePopup = () => {
    console.log("close popup");
    this.setState({
      isShowPopup: false
    });
  };

  componentDidMount() {
    this.props.dispatch(actionCreators.requestData());
  }
  render() {
    const { companyInfo, employees } = this.props;
    const { isShowPopup, selectedEmployee } = this.state;
    console.log("container companyInfo", companyInfo);
    console.log("container employees", employees);
    return (
      <div>
        <Header companyInfo={companyInfo} />
        <MainBody
          employees={employees}
          handleOpenPopup={this.handleOpenPopup}
          selectedEmployee={selectedEmployee}
          isShowPopup={isShowPopup}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
