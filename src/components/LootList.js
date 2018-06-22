import React from 'react';
import Loot from 'Loot';

const LootList = ({ lootList }) => {
  <div className="loot-list">
    {lootList.map(loot => 
        <Loot name={loot.name} type={loot.type} drops={loot.drops} />
    )}
  </div>
}

export default LootList;