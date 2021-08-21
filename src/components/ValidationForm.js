import React, { Component } from 'react';

const initialState = {
  name: '',
  email: '',
  password: '',
  nameError: '',
  emailError: '',
  passwordError: '',
};

export default class ValidationForm extends Component {
  state = initialState;

  handleChange = e => {
    const isCheckbox = e.target.type === 'checkbox';
    this.setState({
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value,
    });
  };

  validate = () => {
    let nameError = '';
    let emailError = '';
    let passwordError = '';

    if (!this.state.name) {
      nameError = 'Name cannot be blank.';
    }

    if (!this.state.email.includes('@')) {
      emailError = 'Invalid email';
    }

    if (this.state.password.length < 6) {
      passwordError = 'Password must be at least 6 characters.';
    }

    if (nameError || emailError || passwordError) {
      this.setState({ nameError, emailError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);

      // Clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="name"
            onChange={this.handleChange}
          />
          <div style={{ color: 'red', fontSize: 12 }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
          <input
            // type="email"
            name="email"
            value={this.state.email}
            placeholder="email"
            onChange={this.handleChange}
          />
          <div style={{ color: 'red', fontSize: 12 }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="password"
            onChange={this.handleChange}
          />
          <div style={{ color: 'red', fontSize: 12 }}>
            {this.state.passwordError}
          </div>
        </div>

        <button>Submit</button>
      </form>
    );
  }
}
