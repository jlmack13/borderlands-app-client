import React, { Component } from 'react';
import './App.css';
import LootListContainer from './containers/LootListContainer';



class App extends Component {
  render() {
    return (
      <div className="App">

        {/* Heading and Nav */}
        <div className="header">
          <h1>Borderlands 2 Lootsplosion!!!</h1>
          <h4>A guide to the legendary loot of Borderlands 2</h4>
        </div>

        {/* Body of App */}
        <div className="main-content">
          <LootListContainer />
        </div>
        
      </div>
    );
  }
}

export default App;
