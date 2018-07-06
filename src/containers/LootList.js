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

  

  render() {
    return (
      <div className="loot-container ">
        <AddLoot show={false} />
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

export default connect(mapStateToProps, { 
  getLoot
 })(LootList);