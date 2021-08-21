import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    name: '',
    favoritePet: '',
    rememberMe: false,
    title: 'Mr.',
  };

  handleChange = (e, fieldName, isCheckbox) => {
    this.setState({
      [fieldName]: isCheckbox ? e.target.checked : e.target.value,
    });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={e => this.handleChange(e, 'name')}
        />
        <textarea
          value={this.state.favoritePet}
          onChange={e => this.handleChange(e, 'favoritePet')}
        />
        <input
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={e => this.handleChange(e, 'rememberMe', true)}
        />
        <div>
          <select
            value={this.state.title}
            onChange={e => this.handleChange(e, 'title')}
          >
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
