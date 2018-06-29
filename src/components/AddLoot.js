import React,  { Component } from 'react';

class AddLoot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            item_type: '',
            manufacturer: '',
            location: '',
            drop: ''
        }
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                {/* Name */}
                <label htmlFor="name">Name:</label>
                <input 
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="Name"
                />

                { /* Item Type */ }
                <label htmlFor="item_type">Item Type:</label>
                <input 
                    type="text"
                    name="item_type"
                    value={this.state.item_type}
                    onChange={this.handleChange}
                    placeholder="Item Type"
                />

                { /* Manufactuer */ }
                <label htmlFor="manufactuer">Manufacturer:</label>
                <input 
                    type="text"
                    name="manufacturer"
                    value={this.state.manufacturer}
                    onChange={this.handleChange}
                    placeholder="Manufacturer"
                />

                { /* Location */ }
                <label htmlFor="location">Location:</label>
                <input 
                    type="text"
                    name="location"
                    value={this.state.location}
                    onChange={this.handleChange}
                    placeholder="Location"
                />

                { /* Dropped By */ }
                <label htmlFor="drop">Dropped By:</label>
                <input 
                    type="text"
                    name="drop"
                    value={this.state.drop}
                    onChange={this.handleChange}
                    placeholder="Dropped By"
                />
            </form>
        )
    }
}