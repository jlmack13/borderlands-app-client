import React from 'react';
import Loot from './Loot';


const LootList = ({ lootList }) => (
  <div className="loot-list">
    {lootList.map( loot => 
        <Loot key={loot.id} name={loot.name} type={loot.type} drop={loot.drop} />
    )}
  </div>
)

export default LootList;