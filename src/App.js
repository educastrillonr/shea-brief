import React from "react";
import Face from "./components/Face";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Face leftAngle={-20} rightAngle={25} scale={1} />
      <Face leftAngle={30} rightAngle={-20} scale={1} />
      <Face leftAngle={345} rightAngle={89} scale={1} />
      <Face leftAngle={-330} rightAngle={340} scale={1.4} />
      <Face leftAngle={165} rightAngle={50} scale={1.8} />
      <Face leftAngle={340} rightAngle={-340} scale={0.6} />
      <Face leftAngle={-1330} rightAngle={2340} scale={1.4} />
      <Face leftAngle={20} rightAngle={-20} scale={0.4} />
    </div>
  );
}

export default App;
