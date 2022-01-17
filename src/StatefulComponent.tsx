import React, { Component } from "react";

type MyState = {
  count: number; // like this
};

class StatefulComponent extends Component<MyState> {
  state: MyState = {
    count: 0
  };

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
