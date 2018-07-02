import React,  { Component } from 'react';
import './AddLoot.css'

class AddLoot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showForm: false,
            name: '',
            item_type: '',
            manufacturer: '',
            location: '',
            drop: ''
        }
    }

    //Handle On Change Method
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    //Handle on Submit Method
    handleOnSubmit = event => {
        event.preventDefault();
        const loot = this.state;
        this.props.addLoot(loot);
        this.setState({
            name: '',
            item_type: '',
            manufacturer: '',
            location: '',
            drop: ''
        })
    }

    //Toggle Form for Adding New Loot
    toggleAddLoot = (event) => {
        //Do I need to prevent default or not?
        // event.preventDefault();
        this.state.showForm === false ? this.setState({showForm: true}) : this.setState({showForm: false});
    }

    
    render() {
        return (
            <div className="add-loot">
                <a className="toggle-add-loot-btn" onClick={this.toggleAddLoot}>{ this.state.showForm === true ? "Hide Add Loot Form" : "Show Add Loot Form" }</a>
                { this.state.showForm ? 
                    <form className="add-loot-form" onSubmit={this.handleOnSubmit}>
                        <h1>Add Loot</h1>
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

                        <button>Add Loot</button>
                    </form>
                : null} 
            </div>
        )
    }
}

export default AddLoot;