import React, { Component } from "react";

class Login extends Component {
  state = { user: {} };
  render() {
    return <button onClick={this.props.signIn}>Log In</button>;
  }
}

export default Login;
