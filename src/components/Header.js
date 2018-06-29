import React from 'react';
import Nav from './Nav.js';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Borderlands 2 Lootsplosion!!!</h1>
            <h4>A guide to the legendary loot of Borderlands 2</h4><br />
            <Nav />
        </div>
    )
}

export default Header;

