import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loot from '../components/Loot';

const API_URL = process.env.REACT_APP_API_URL;

class StoryModeList extends Component {
    // constructor() {
    //     super();

    //     this.state = {
    //         loot: []
    //     };
    // }

    componentDidMount() {
        fetch(`${API_URL}storymode`)
            .then(response => response.json())
            // .then(loot => this.setState({ loot }))
    }


    render() {
    return (
      <div className="loot-container">
        <div className="story-mode-list">
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
    return ({
        loot: state.loot,
    })
}

export default connect(mapStateToProps)(StoryModeList);