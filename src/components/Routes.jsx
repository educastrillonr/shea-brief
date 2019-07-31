import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import Login from "./Login";
import Home from "./Home";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Redirect noThrow from="/" to="login" />
        <Login signIn={this.props.signIn} path="login" />
        <Home signOut={this.props.signOut} path="home" />
      </Router>
    );
  }
}

export default Routes;
