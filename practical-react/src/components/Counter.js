import React, { Component } from 'react';

export default class Counter extends Component {
  render() {
    return (
      <div>
        <div>count: {this.props.count}</div>
        <button onClick={this.props.increment}>increment</button>
        <button onClick={this.props.decrement}>decrement</button>
      </div>
    );
  }
}
