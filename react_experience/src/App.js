import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import ListApi from './components/ListApi'




class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Repair Center</h1>
        <Login />
        <ListApi />
      </div>
    );
  }
}

export default App;
