import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MainRoute from './routes/MainRoute'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainRoute />
      </div>
    );
  }
}

export default App;
