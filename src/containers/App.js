import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "../components/Header";
import MainBody from "../components/MainBody";
import * as actionCreators from "../actions";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(actionCreators.requestData());
  }
  render() {
    const { companyInfo, employees } = this.props;
    console.log("container companyInfo", companyInfo);
    console.log("container employees", employees);
    return (
      <div>
        <Header />
        <MainBody />
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
