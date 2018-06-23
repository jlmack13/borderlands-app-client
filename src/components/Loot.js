import React from 'react';
import './Loot.css';

const Loot = ( {id, name, type, drop} ) => {
    return (
        <div className="loot">
            <p>Name: {name}</p>
            <p>Type: {type}</p>
            <p>Dropped By: {drop}</p>
        </div>
    )
}

export default Loot;