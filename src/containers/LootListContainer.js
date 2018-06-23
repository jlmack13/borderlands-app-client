import React from 'react';
import LootList from '../components/LootList';

const lootsplosion = [
    {   
        id: 1,
        type: 'Weapon',
        subtype: 'SMG',
        name: 'The Bitch',
        region: 'The Highlands',
        location: 'The Bunker',
        drop: 'BNK3R'
    },
    {
        id: 2,
        type: 'Weapon',
        subtype: 'Shotgun',
        name: 'The Conference Call',
        region: 'The Highlands',
        location: 'The Bunker',
        drop: 'BNK3R'
    }
]

class LootListContainer extends React.Component {
    constructor() {
        super();

        // is this confusing to have the same word for singular and plural
        this.state = {
            loot: []
        };
    }

    //temporary until API is up and running then will need to put the fetch here
    componentDidMount() {
        this.setState( {lootsplosion} );
    }

    render() {
        return (<LootList lootList={lootsplosion} />)
    }
}    

export default LootListContainer;