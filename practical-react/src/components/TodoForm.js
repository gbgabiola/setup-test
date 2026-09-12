import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class TodoForm extends Component {
  state = {
    text: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({
      id: uuidv4(),
      text: this.state.text,
      isComplete: false,
    });

    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="todo..."
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Add todo</button>
      </form>
    );
  }
}
