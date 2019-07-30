import React from "react";
import Face from "./components/Face";
import "./App.css";
import { firestore } from "./firebase";
import firebase from "./firebase";

function App() {
  let nOfSheas = 6;
  let sheaArray = [];
  const getRandomScale = () => {
    return Math.random() * 2;
  };

  const getRandomAngle = () => {
    return Math.floor(Math.random() * 720) - 360;
  };

  for (let index = 0; index < nOfSheas; index++) {
    sheaArray.push({
      leftAngle: getRandomAngle(),
      rightAngle: getRandomAngle(),
      scale: getRandomScale()
    });
  }

  // FIREBASE STUFF HERE MAN
  var provider = new firebase.auth.GoogleAuthProvider();
  const signIn = () => {
    // Using a popup.
    // alert("barry");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // code which runs on success
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode);
        alert(errorCode);

        var errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
      });
  };

  return (
    <div className="App">
      {sheaArray.map((face, index) => (
        <Face
          leftAngle={face.leftAngle}
          rightAngle={face.rightAngle}
          scale={face.scale}
          key={index}
        />
      ))}
      <button onClick={signIn}>Log In</button>
    </div>
  );
}

export default App;
