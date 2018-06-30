import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './Nav.css';
import Dropdown from './Dropdown';


const Nav = () => {
    return (
        <div className="nav">
            <ul className="nav-group">
                <NavLink to="/" exact activeStyle={{background: 'chartreuse'}}>Home</NavLink>
                <NavLink to="/about" exact activeStyle={{background: 'chartreuse'}}>About</NavLink>
                <NavLink to="/storymode" exact activeStyle={{background: 'chartreuse'}}>Story Mode</NavLink>
                <Dropdown name="Manufacturer" sub_items={["Anshin", "Bandit", "Dahl", "Hyperion", "Jakobs", "Maliwan", "Pangolin", "Tediore", "Torgue", "Vladof"]} />
                <Dropdown name="Item Type" sub_items={["Assault Rifle", "Class Mod", "Grenade Mod", "Pistol", "Shield", "Shotgun", "Sniper Rifle", "Submachine Gun", "Relic" , "Repeater Pistol", "Rocket Launcher"]} />
            </ul>
        </div>
    )
}

export default Nav;