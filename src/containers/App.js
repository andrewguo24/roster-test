import React from "react";
import Header from "../components/Header";
import MainBody from "../components/MainBody";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainBody />
      </div>
    );
  }
}

export default App;
