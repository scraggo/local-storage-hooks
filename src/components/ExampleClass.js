import React, { Component } from "react";
import SimpleStorage from "../external/SimpleStorage";

export default class ExampleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      exclamation: false
    };
  }

  setCount = value => {
    this.setState({ count: value });
  };

  setExclamation = value => {
    this.setState({ exclamation: value });
  };

  reset = () => {
    this.setState({ count: 0, exclamation: false });
  };

  render() {
    const { count, exclamation } = this.state;
    return (
      <div>
        <h2>Stateful</h2>
        <p>
          You clicked {count} times{exclamation && "!!!"}
        </p>
        <button onClick={() => this.setCount(count + 1)}>Add to Count</button>
        <button onClick={() => this.setExclamation(!exclamation)}>
          Toggle Exclamation {exclamation ? "Off" : "On"}
        </button>
        <br />
        <button onClick={this.reset}>Reset</button>
        <SimpleStorage prefix="ExampleClass" parent={this} />
      </div>
    );
  }
}
