import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0,
  };

  componentWillUnmount() {
    console.log('unmounting...');
  }

  componentDidMount() {
    console.log('mounting...');
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.handleIncrement}>increment</button>
        <button onClick={this.handleDecrement}>decrement</button>
      </div>
    );
  }
}
