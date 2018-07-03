import React from 'react';
import Loot from './Loot';
import './LootList.css'


const LootList = ({ lootList }) => (
  <div className="loot-list">
    {lootList.map( loot => 
        <Loot key={loot.id} name={loot.name} item_type={loot.item_type} manufacturer={loot.manufacturer} location={loot.location} drop={loot.drop} image_url={loot.image_url} />
    )}
  </div>
)

export default LootList;