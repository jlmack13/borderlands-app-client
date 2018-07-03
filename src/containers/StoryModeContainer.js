import React from 'react';
import LootList from '../components/LootList';

const API_URL = process.env.REACT_APP_API_URL;

class StoryModeContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            loot: []
        };
    }

    componentDidMount() {
        fetch(`${API_URL}storymode`)
            .then(response => response.json())
            .then(loot => this.setState({ loot }))
    }


    render() {
        return (
            <div className="loot-container">
                <LootList lootList={this.state.loot} story_mode={true}/>
            </div>  
        )
    }
}    

export default StoryModeContainer;