import React, { Component } from 'react';
import './App.css';
import LootListContainer from './containers/LootListContainer';
import Header from './components/Header'



class App extends Component {
  render() {
    return (
      <div className="App">

        {/* Heading and Nav */}
        <Header />

        {/* Body of App */}
        <div className="main-content">
          <LootListContainer />
        </div>
        
      </div>
    );
  }
}

export default App;
