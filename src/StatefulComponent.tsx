import React, { Component } from "react";

class StatefulComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }
  increment = () => {
    this.setState(() => ({ count: this.state.count + 1 }));
  };

  decrement = () => {
    this.setState(() => ({ count: this.state.count - 1 }));
  };

  render() {
    return (
      <div>
        <h1> {this.state.count} </h1>
        <button onClick={this.increment}> Increment </button>
        <button onClick={this.decrement}> Drecrement </button>
      </div>
    );
  }
}

export default StatefulComponent;
