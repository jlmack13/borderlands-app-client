import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loot from '../components/Loot';
import { getLoot } from '../actions/loot';
import './LootList.css';
import AddLoot from './AddLoot';


class LootList extends Component {

  componentDidMount() {
    this.props.getLoot()
  }

  // addLoot = loot => {
  //   const request = {
  //     method: 'POST',
  //     body: JSON.stringify(loot),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   }
  //   return (
      
  //     // .then(loot => this.setState({
  //     //     loot: this.state.loot.concat(loot)
  //     // }))
  //   );
  

  render() {
    return (
      <div className="loot-container">
        <AddLoot addLoot={this.addLoot} />
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

export default connect(mapStateToProps, { getLoot })(LootList);