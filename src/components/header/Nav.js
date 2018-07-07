import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
// import Dropdown from './Dropdown';


const Nav = () => {
    return (
        <div className="nav">
            <ul className="nav-group">
                <NavLink to="/" exact activeStyle={{background: '#55D2F2'}}>Home</NavLink>
                <NavLink to="/about" exact activeStyle={{background: '#55D2F2'}}>About</NavLink>
                <NavLink to="/storymode" exact activeStyle={{background: '#55D2F2'}}>Story Mode</NavLink>
                {/* <Dropdown name="Manufacturer" sub_items={["Anshin", "Bandit", "Dahl", "Hyperion", "Jakobs", "Maliwan", "Pangolin", "Tediore", "Torgue", "Vladof"]} />
                <Dropdown name="Item Type" sub_items={["Assault Rifle", "Class Mod", "Grenade Mod", "Pistol", "Shield", "Shotgun", "Sniper Rifle", "Submachine Gun", "Relic" , "Repeater Pistol", "Rocket Launcher"]} /> */}
            </ul>
        </div>
    )
}

export default Nav;