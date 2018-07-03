import React from 'react';
import './Loot.css';

const Loot = ( {id, name, item_type, manufacturer, drop, location, image_url} ) => {
    return (
        <div className="loot">
            <div className="loot-image"><img src={image_url} /></div>
            <div className="loot-info">
                <h2>{name}</h2>
                <h4>{item_type}</h4>
                <h4>{manufacturer}</h4>
                <p><strong>Location:</strong> {location}</p>
                <p><strong>Dropped By:</strong> {drop}</p>
            </div>
        </div>
    )
}

export default Loot;