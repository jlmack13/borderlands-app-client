import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loot from '../components/Loot';
import './LootList.css';
import AddLoot from '../components/AddLoot';

const API_URL = process.env.REACT_APP_API_URL;


class LootList extends Component {

  componentDidMount() {
    fetch(`${API_URL}loots`)
      .then(response => response.json())
    // .then((loot => this.setState({ loot })));
  }

  addLoot = loot => {
    const request = {
      method: 'POST',
      body: JSON.stringify(loot),
      headers: {
        'Content-Type': 'application/json',
      }
    }
    return (
      fetch(`${API_URL}loots`, request)
      .then(response => response.json())
      // .then(loot => this.setState({
      //     loot: this.state.loot.concat(loot)
      // }))
    );
  }

  render() {
    return (
      <div className="loot-container">
        {/* <AddLoot addLoot={this.addLoot} /> */}
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

export default connect(mapStateToProps)(LootList);