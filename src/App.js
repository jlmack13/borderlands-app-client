import React, { Component } from 'react';
import './App.css';
import Loot from './components/Loot';
import LootList from './components/LootList';

let lootsplosion = [
  {
    type: 'weapon',
    subtype: 'SMG',
    name: 'The Bitch',
    region: 'The Highlands',
    location: 'The Bunker',
    drop: 'BNK3R'
  }
]

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
          <LootList lootList={lootsplosion}/>
        </div>
        
      </div>
    );
  }
}

export default App;
