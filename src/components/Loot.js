import React from 'react';


const Loot = ( name, type, drop ) => {
    return (
        <div className="loot">
            <p>Name: {loot.name}</p><br />
            <p>Type: {loot.type}</p><br />
            <p>Dropped By: {loot.drop}</p><br />
        </div>
    )
}

export default Loot;