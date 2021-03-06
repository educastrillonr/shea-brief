import React, { Component } from "react";
import face from "../assets/face.PNG";
import leftEye from "../assets/lefteye.PNG";
import rightEye from "../assets/righteye.PNG";
import "./Face.css";

class Face extends Component {
  state = { isNormal: true, left: 0, right: 0, scale: 1 };

  handleClick = () => {
    this.setState({
      isNormal: !this.state.isNormal
    });

    if (this.state.isNormal) {
      this.setState({
        left: this.props.leftAngle,
        right: this.props.rightAngle,
        scale: this.props.scale
      });
    } else {
      this.setState({
        left: 0,
        right: 0,
        scale: 1
      });
    }
  };

  render() {
    const rotateStyleLeft = {
      transform:
        "rotate(" + this.state.left + "deg) scale(" + this.state.scale + ")"
    };
    const rotateStyleRight = {
      transform:
        "rotate(" + this.state.right + "deg)scale(" + this.state.scale + ")"
    };
    return (
      <article onClick={this.handleClick}>
        <img className="face" src={face} alt="" />
        <img
          className="eye left-eye"
          style={rotateStyleLeft}
          src={leftEye}
          alt=""
        />
        <img
          className="eye right-eye"
          style={rotateStyleRight}
          src={rightEye}
          alt=""
        />
      </article>
    );
  }
}

export default Face;
