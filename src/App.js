import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Counters} from "./components/Counters.js"
import {ConditionalRender} from "./components/conditionalRender.js"
class App extends Component {
  render() {
    const listing = ['a','b','c'];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        <h1>Hello React...</h1>
        <ul>
        {listing.map(
          function(value, index){
            return (<li key={"key"+index}>{value}</li>)
          }
        )}
        </ul>
        <ConditionalRender />
        </div>
        <Counters />
      </div>
    );
  }
}

export default App;
