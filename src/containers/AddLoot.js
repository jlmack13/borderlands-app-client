import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { updateLootFormData } from '../actions/lootForm';
import { createLoot } from '../actions/loot';
import './AddLoot.css'

class AddLoot extends Component {

    //Handle On Change Method
    handleChange = event => {
        const { name, value } = event.target;
        const currentLootFormData = Object.assign({}, this.props.lootFormData, { 
            [name]: value
        })
        this.props.updateLootFormData(currentLootFormData)
    }

    //Handle on Submit Method
    handleOnSubmit = event => {
        event.preventDefault();
        this.props.createLoot(this.props.lootFormData)
    }

    //Toggle Form for Adding New Loot
    // toggleAddLoot = () => {
    //     this.state.showForm === false ? this.setState({showForm: true}) : this.setState({showForm: false});
    // }

    
    render() {
        const { name, item_type, manufacturer, location, drop } = this.props.lootFormData;
        return (
            <div className="add-loot">
                {/* <a className="toggle-add-loot-btn" onClick={this.toggleAddLoot}>{ this.state.showForm === true ? "Hide Add Loot Form" : "Show Add Loot Form" }</a> */}
                {/* { this.state.showForm ?  */}
                    <form className="add-loot-form" onSubmit={this.handleOnSubmit}>
                        <h1>Add Loot</h1>
                        {/* Name */}
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                            placeholder="Name"
                        />

                        { /* Item Type */ }
                        <label htmlFor="item_type">Item Type:</label>
                        <input 
                            type="text"
                            name="item_type"
                            value={item_type}
                            onChange={this.handleChange}
                            placeholder="Item Type"
                        />

                        { /* Manufactuer */ }
                        <label htmlFor="manufactuer">Manufacturer:</label>
                        <input 
                            type="text"
                            name="manufacturer"
                            value={manufacturer}
                            onChange={this.handleChange}
                            placeholder="Manufacturer"
                        />

                        { /* Location */ }
                        <label htmlFor="location">Location:</label>
                        <input 
                            type="text"
                            name="location"
                            value={location}
                            onChange={this.handleChange}
                            placeholder="Location"
                        />

                        { /* Dropped By */ }
                        <label htmlFor="drop">Dropped By:</label>
                        <input 
                            type="text"
                            name="drop"
                            value={drop}
                            onChange={this.handleChange}
                            placeholder="Dropped By"
                        />

                        <button>Add Loot</button>
                    </form>
                {/* : null}  */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lootFormData: state.lootFormData
    }
}
export default connect(mapStateToProps, {
    updateLootFormData,
    createLoot
})(AddLoot);