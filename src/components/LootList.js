import React from 'react';
import Loot from './Loot';
import './LootList.css'


const LootList = ({ lootList }) => (
  <div className="loot-list">
    {lootList.map( loot => 
        <Loot key={loot.id} name={loot.name} item_type={loot.item_type} drop={loot.drop} />
    )}
  </div>
)

export default LootList;