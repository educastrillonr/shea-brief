import React from "react";
import Face from "./components/Face";
import "./App.css";

function App() {

  let nOfSheas = 50;
  let sheaArray = [];
  const getRandomScale = () => {
    return Math.random()*2;
  }

  const getRandomAngle = () => {
    return Math.floor(Math.random()*720) - 360;
  }

  for (let index = 0; index < nOfSheas; index++) {
    sheaArray.push({leftAngle: getRandomAngle(), rightAngle: getRandomAngle(), scale: getRandomScale()});
  }
  
    return (
    <div className="App">
      {sheaArray.map((face, index) => (
        <Face leftAngle={face.leftAngle} rightAngle={face.rightAngle} scale={face.scale} key={index} />
      ))}
    </div>
  );
}

export default App;
