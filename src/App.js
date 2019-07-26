import React from "react";
import Face from "./components/Face";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Face leftAngle={60} rightAngle={40} />
      <Face leftAngle={100} rightAngle={19} />
      <Face leftAngle={40} rightAngle={89} />
      <Face leftAngle={90} rightAngle={110} />
      <Face leftAngle={165} rightAngle={50} />
    </div>
  );
}

export default App;
