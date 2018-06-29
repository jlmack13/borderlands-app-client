import React from 'react';
import LootList from '../components/LootList';

const API_URL = process.env.REACT_APP_API_URL;

class LootListContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            loot: []
        };
    }

    componentDidMount() {
        fetch(`${API_URL}/loots`)
            .then(response => response.json())
            .then((loot => this.setState({ loot })));
    }

    render() {
        return (<LootList lootList={this.state.loot} />)
    }
}    

export default LootListContainer;