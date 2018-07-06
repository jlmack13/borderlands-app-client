import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loot from '../components/Loot';
import { getStoryLoot } from '../actions/loot';
import './LootList.css';


class StoryList extends Component {

  componentDidMount() {
    this.props.getStoryLoot()
  }

  render() {
    return (
      <div className="loot-container">
        <div className="loot-list">
          {this.props.loot.map( loot => 
              <Loot 
              key={loot.id} 
              name={loot.name} 
              item_type={loot.item_type} 
              manufacturer={loot.manufacturer} 
              location={loot.location} 
              drop={loot.drop} 
              image_url={loot.image_url}
              story_id={ loot.story_id } 
              story_quest={ loot.story_quest } 
              note={ loot.note }
              />
            )}
        </div>
      </div>  
    )
  }
}

const mapStateToProps = (state) => {
 return({
   loot: state.loot,
 })
}

export default connect(mapStateToProps, { getStoryLoot })(StoryList);