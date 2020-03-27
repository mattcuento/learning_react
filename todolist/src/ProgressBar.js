import React, { Component } from "react";
import "./ProgressBar.css";

class PBar extends Component {
  constructor(props) {
    super(props);
  }

  state = {};

  render() {
    return (
      <div className="bar">
        <div
          className="filler"
          style={{ width: `${this.props.percentage}%` }}
        ></div>
      </div>
    );
  }
}

export default PBar;
