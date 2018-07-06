import React, { Component } from 'react';
import Nav from './Nav';
import './Header.css';


class Header extends Component {
    toggleFireworks = (e) => {
        if (e.target.tagName === 'DIV') {
            const div = e.target
            div.classList.toggle('pyro')
        }
    }
    render() {
        return (
            <div className="header pyro" onClick={this.toggleFireworks}>
                <div className="before"></div>
                <div className="after"></div>
                
                <h4>A guide to the legendary loot of Borderlands 2</h4>
                <h1>Borderlands 2 Lootsplosion!!!</h1>
                <Nav />

            </div>
        )
    }
}

export default Header;

