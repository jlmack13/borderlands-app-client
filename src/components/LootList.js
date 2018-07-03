import React from 'react';
import Loot from './Loot';
import './LootList.css'


const LootList = ({ lootList, story_mode }) => (
  <div className="loot-list">
    {lootList.map( loot => 
        <Loot 
          key={loot.id} 
          name={loot.name} 
          item_type={loot.item_type} 
          manufacturer={loot.manufacturer} 
          location={loot.location} 
          drop={loot.drop} 
          image_url={loot.image_url} 
          story_id={ story_mode === true ? loot.story_id : null} 
          story_quest={ story_mode === true ? loot.story_quest : null} 
          note={ story_mode === true ? loot.note : null}/>
    )}
  </div>
)

export default LootList;