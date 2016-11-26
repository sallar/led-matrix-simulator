import React, { Component } from 'react';
import Led from './Led';
import logo from './logo@2x.png';
import './App.css';

function randomPixel() {
  return {
    on: Math.random() > 0.5,
    color: {
      a: Math.random(),
      r: parseInt(Math.random() * 255, 10),
      g: parseInt(Math.random() * 255, 10),
      b: parseInt(Math.random() * 255, 10)
    }
  };
}

const data = [];

for (let i = 0; i < 16; i++) {
  let row = [];
  for (let j = 0; j < 32; j++) {
    row.push(randomPixel());
  }
  data.push(row);
}

console.log(data);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>LED Matrix Simulator</h2>
        </div>
        <Led width={32} height={16} data={data}/>
      </div>
    );
  }
}

export default App;
