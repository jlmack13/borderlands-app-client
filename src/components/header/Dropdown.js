import React from 'react';
import SubItem from './SubItem';
import './Dropdown.css';

const Dropdown = ({name, sub_items}) => {
    return (
        <li className="has-sub"><span id={name}><a className="main-sub">{name}</a></span>
            <div id="sub-items">
                {sub_items.map(sub_item => <SubItem name={sub_item}/>)}
            </div>
        </li>
    )
}

export default Dropdown;