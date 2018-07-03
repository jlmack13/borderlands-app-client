import React from 'react';
import './Loot.css';

const Loot = ( {id, name, item_type, manufacturer, drop, location, image_url} ) => {
    return (
        <div className="loot">
            <div className="loot-image">
                <img src={image_url} alt={name}/>
            </div>
            <div className="loot-info">
                <h2>{name}</h2>
                <div className="loot-details">
                    <p><strong>Type:</strong> {item_type}</p>
                    <p><strong>Manufacturer:</strong> {manufacturer}</p>
                    <p><strong>Location:</strong> {location}</p>
                    <p><strong>Dropped By:</strong> {drop}</p>
                </div>
            </div>
        </div>
    )
}

export default Loot;