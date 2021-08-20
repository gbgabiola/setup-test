import React, { Component } from 'react';
import './App.css';
import ImageSlider from './components/ImageSlider';

class App extends Component {
  add(a, b) {
    return a + b;
  }
  render() {
    // const add = (a, b) => a + b;

    return (
      <div className="App">
        <ImageSlider />
      </div>
    );
  }
}

export default App;
