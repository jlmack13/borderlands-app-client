import React from 'react';
import './Loot.css';

const Loot = ( {id, name, item_type, manufacturer, drop, location} ) => {
    return (
        <div className="loot">
            <h2>{name}</h2>
            <h4>{item_type}</h4>
            <h4>{manufacturer}</h4>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Dropped By:</strong> {drop}</p>
        </div>
    )
}

export default Loot;