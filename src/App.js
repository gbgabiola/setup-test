import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import Body, { Body2, Body3 } from './components/Body';

class App extends Component {
  add(a, b) {
    return a + b;
  }
  render() {
    // const add = (a, b) => a + b;

    return (
      <div className="App">
        <Header
          title="Hello"
          num={5}
          myArr={[1, 2, 3]}
          // myFunc={(a, b) => a + b}
          myFunc={this.add}
          myobj={{
            a: 5,
            b: 6,
          }}
        />
        <Body2 />
        <Body myFunc={this.add} text={'I am cool.'} text2={'I am cool2.'} />
        <Body myFunc={this.add} text={'I am cool.'} text2={'I am cool2.'} />
      </div>
    );
  }
}

export default App;
