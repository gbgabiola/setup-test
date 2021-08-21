import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';

class App extends Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <div className="App">
        {/* {this.state.visible ? <Counter /> : null} */}
        <div
          // style={this.state.visible ? {} : { display: 'none' }}
          className={this.state.visible ? 'visible' : 'hidden'}
        >
          <Counter />
        </div>
        <button
          onClick={() => {
            this.setState({ visible: !this.state.visible });
          }}
        >
          toggle counter
        </button>
      </div>
    );
  }
}

export default App;
