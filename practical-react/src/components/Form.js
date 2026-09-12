import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    name: '',
    favoritePet: '',
    rememberMe: false,
    title: 'Mr.',
  };

  handleChange = e => {
    const isCheckbox = e.target.type === 'checkbox';
    this.setState({
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <textarea
          name="favoritePet"
          value={this.state.favoritePet}
          onChange={this.handleChange}
        />
        <input
          type="checkbox"
          name="rememberMe"
          checked={this.state.rememberMe}
          onChange={this.handleChange}
        />
        <div>
          <select
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          >
            <option>Mr.</option>
            <option>Miss.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}
