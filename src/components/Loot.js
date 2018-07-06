import React from 'react';
import './Loot.css';


const Loot = ( {id, name, item_type, manufacturer, drop, location, image_url, story_id, story_quest, note} ) => {
    return (
        <div className="loot">
            <div className="loot-image">
                <img src={image_url} alt={name}/>
            </div>
            <div className="loot-info">
                { story_id !== undefined ? <h2>{story_id}. {name}</h2> : <h2>{name}</h2>}
                <div className="loot-details">
                    <p><strong>Type:</strong> {item_type}</p>
                    <p><strong>Manufacturer:</strong> {manufacturer}</p>
                    <p><strong>Location:</strong> {location}</p>
                    <p><strong>Dropped By:</strong> {drop}</p>
                    { story_id !== undefined ? <p><strong>Quest:</strong> {story_quest}</p> : null}
                    { note !== null ? note !== undefined ? <p><strong>Note:</strong> {note}</p> : null : null}
                </div>
            </div>
        </div>
    )
}

export default Loot;