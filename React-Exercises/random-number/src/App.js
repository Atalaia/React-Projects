import React, { Component } from 'react';
import RandomNumber from './RandomNumber';
import './App.css';

class App extends Component {
  render() {
    return (
      <RandomNumber maxNum={10}/>
    );
  } 
}

export default App;
