import React, { Component } from 'react';
import Nav from './Nav';
import './Header.css';
import claptrap from './large-logo.svg';

    

class Header extends Component {
    toggleFireworks = (e) => {
        if (e.target.tagName === 'DIV') {
            const div = e.target
            div.classList.toggle('pyro')
        }
    }
    render() {
        return (
            <div className="header pyro"  title="Click to Toggle Fireworks" onClick={this.toggleFireworks}>
                <div className="before"></div>
                <div className="after"></div>
                
                
                <h4>A visual guide to the legendary loot of Borderlands 2</h4>
                <img src={claptrap} height="150px" alt="borderlands 2 app logo" className="logo"/>
                <h1 className="alt-logo">Borderlands 2 Lootsplosion!!!</h1>
                <Nav />

            </div>
        )
    }
}

export default Header;

