import React, { Component } from "react";
import { navigate } from "@reach/router";
import firebase from "./firebase";
import Routes from "./components/Routes";

class App extends Component {
  state = { user: null };

  signIn = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        // code which runs on success
        const user = result.user;
        this.setState({
          user
        });
        navigate("/home");
      })
      .catch(error => {
        // Handle Errors here.
        let errorCode = error.code;
        console.log(errorCode);
        alert(errorCode);

        let errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
      });
  };

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        this.setState({
          user: null
        });
        navigate("/login");
      })
      .catch(function(error) {
        // An error happened.
        console.log(error);
      });
  };

  getSignOutBtn = () => {
    return this.state.user ? (
      <button onClick={this.signOut}>Sign out</button>
    ) : null;
  };

  render() {
    return (
      <div className="App">
        <Routes signIn={this.signIn} />
      </div>
    );
  }
}

export default App;
