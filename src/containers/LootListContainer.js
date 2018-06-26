import React from 'react';
import LootList from '../components/LootList';

const API_URL = process.env.REACT_APP_API_URL;

class LootListContainer extends React.Component {
    constructor() {
        super();

        // is this confusing to have the same word for singular and plural
        this.state = {
            loot: []
        };
    }

    //temporary until API is up and running then will need to put the fetch here
    //THIS IS UNNECESSARY AS I'M JUST PASSING LOOTSPLOSION
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