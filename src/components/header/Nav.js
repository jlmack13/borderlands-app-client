import React from 'react';
import './Nav.css';
import NavItem from './NavItem';
import Dropdown from './Dropdown';


const Nav = () => {
    return (
        <div className="nav">
            <ul className="nav-group">
                <NavItem name="Story Mode" />
                <NavItem name="About"/>
                <Dropdown name="Manufacturer" sub_items={["Anshin", "Bandit", "Dahl", "Hyperion", "Jakobs", "Maliwan", "Pangolin", "Tediore", "Torgue", "Vladof"]} />
                <Dropdown name="Item Type" sub_items={["Assault Rifle", "Class Mod", "Grenade Mod", "Pistol", "Shield", "Shotgun", "Sniper Rifle", "Submachine Gun", "Relic" , "Repeater Pistol", "Rocket Launcher"]} />
            </ul>
        </div>
    )
}

export default Nav;