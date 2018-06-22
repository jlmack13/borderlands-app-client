import React from 'react';

class LootListContainer extends React.Component {
    constructor() {
        super();

        // is this confusing to have the same word for singular and plural
        this.state = {
            loot: []
        };
    }

    render() {
        return <LootList loot={this.state.loot} />
    }
}