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
                <Dropdown name="Manufacturer" sub_items={["Maliwan", "Anshin", "Bandit"]} />
            </ul>
        </div>
    )
}

export default Nav;