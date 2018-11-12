import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import HomePage from './containers/HomePage';


class App extends Component {
  render() {
    return (
      <div className="App">
    <HomePage/>

      </div>
    );
  }
}

export default App;
