import React from 'react';
import LootList from '../components/LootList';
import AddLoot from '../components/AddLoot';

const API_URL = process.env.REACT_APP_API_URL;

class LootListContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            loot: []
        };
    }

    componentDidMount() {
        fetch(`${API_URL}loots`)
            .then(response => response.json())
            .then((loot => this.setState({ loot })));
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
            .then(loot => this.setState({
                loot: this.state.loot.concat(loot)
            }))
        );
    } 

    render() {
        return (
            <div className="loot-container">
                <AddLoot addLoot={this.addLoot} />
                <LootList lootList={this.state.loot} />
            </div>  
        )
    }
}    

export default LootListContainer;