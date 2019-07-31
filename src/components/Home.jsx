import React, { Component } from "react";
import Face from "./Face";
import "./Home.css";

class Home extends Component {
  state = { nOfSheas: 10 };
  sheaArray = [];
  getRandomScale = () => {
    return Math.random() * 2;
  };
  getRandomAngle = () => {
    return Math.floor(Math.random() * 720) - 360;
  };

  populateArray = () => {
    for (let index = 0; index < this.state.nOfSheas; index++) {
      this.sheaArray.push({
        leftAngle: this.getRandomAngle(),
        rightAngle: this.getRandomAngle(),
        scale: this.getRandomScale()
      });
    }
  };
  render() {
    this.populateArray();
    return (
      <section class="Home">
        {this.sheaArray.map((face, index) => (
          <Face
            leftAngle={face.leftAngle}
            rightAngle={face.rightAngle}
            scale={face.scale}
            key={index}
          />
        ))}
        <button onClick={this.props.signOut}> Sign Out </button>
      </section>
    );
  }
}

export default Home;
