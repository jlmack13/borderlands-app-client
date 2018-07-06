import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/header/Nav';
import Home from './components/Home';
import About from './components/About';
import StoryMode from './components/StoryMode';
import LootList from './containers/LootList';



class App extends Component {
  
  render() {
    return (
      <div className="App">

        {/* Heading and Nav */}
        <Header />
        <Router>
          <div>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/storymode" component={StoryMode} />
          </div>
        </Router>
        <LootList  />
      </div>
    );
  }
}

export default App;
