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
    },
    {
        id: 3,
        type: 'Shield',
        subtype: '',
        name: 'The Bee',
        region: 'Arid Nexus',
        location: 'Boneyard',
        drop: 'Hunter Hellquist'
    },
    {
        id: 4,
        type: 'Grenade',
        subtype: '',
        name: 'Bonus Package',
        region: 'Southern Shelf',
        location: '',
        drop: 'Boom & Bewm'
    },

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
    //THIS IS UNNECESSARY AS I'M JUST PASSING LOOTSPLOSION
    // componentDidMount() {
    //     this.setState( {lootsplosion} );
    // }

    render() {
        return (<LootList lootList={lootsplosion} />)
    }
}    

export default LootListContainer;