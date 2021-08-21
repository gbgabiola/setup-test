import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    name: '',
    favoritePet: '',
    rememberMe: false,
    title: 'Mr.',
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleChangeFavoritePet = e => {
    this.setState({ favoritePet: e.target.value });
  };

  handleCheck = e => {
    this.setState({ rememberMe: e.target.checked });
  };

  handleSelect = e => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.handleChange} />
        <textarea
          value={this.state.favoritePet}
          onChange={this.handleChangeFavoritePet}
        />
        <input
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleCheck}
        />
        <div>
          <select value={this.state.title} onChange={this.handleSelect}>
            <option>Mr.</option>
            <option>Miss.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
