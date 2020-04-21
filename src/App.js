import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage";
import Initial from "./components/Initial";
import Questions from "./components/Questions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Initial} />
          <Route path="/words-of-wisdom" component={Homepage} />
          <Route path="/questions" component={Questions} />
        </div>
      </Router>
    );
  }
}

export default App;
