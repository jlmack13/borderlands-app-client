import React from 'react';
import './NavItem.css'

const NavItem = ({name}) => {
    return (
        <li className="nav-item">{name}</li>
    );
}

export default NavItem;