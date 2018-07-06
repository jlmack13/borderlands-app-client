import React from 'react';
import Nav from './Nav';
import './Header.css';


const Header = () => {
    return (
        <div className="header pyro">
            <div className="before"></div>
            <div className="after"></div>
            <h4>A guide to the legendary loot of Borderlands 2</h4>
            <h1>Borderlands 2 Lootsplosion!!!</h1>
            <Nav />
            
        </div>
    )
}

export default Header;

