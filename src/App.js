import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import HomePage from './containers/HomePage';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

class App extends Component {


  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <HomePage />
        </Provider>
      </div>

    );
  }
}

export default App;
