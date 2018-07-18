import React, { Component } from 'react';
import './Loot.css';
const API_URL = process.env.REACT_APP_API_URL;


class Loot extends Component {
    constructor(props) {
        super(props);
        this.state = {likes: this.props.initial_likes}
    }


    likeLoot = () => {
        console.log(`You liked ${this.props.name}`);
        this.setState({likes: this.state.likes + 1}, () => {
            fetch(`${API_URL}loots/${this.props.id}`, {
                    method: 'PATCH',
                    body: JSON.stringify(this.state),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                .then(response => response.json())
                .then((json) => console.log(json))
        })
    }

    render () {
        return (
            <div className="loot" onClick={this.likeLoot}>
                <div className="loot-image">
                    <img src={this.props.image_url} alt={this.props.name}/>
                </div>
                <div className="loot-info">
                    { this.props.story_id !== undefined ? <h2>{this.props.story_id}. {this.props.name}</h2> : <h2>{this.props.name}</h2>}
                    <div className="loot-details">
                        <p><strong>Type:</strong> {this.props.item_type}</p>
                        <p><strong>Manufacturer:</strong> {this.props.manufacturer}</p>
                        <p><strong>Location:</strong> {this.props.location}</p>
                        <p><strong>Dropped By:</strong> {this.props.drop}</p>
                        { this.props.story_id !== undefined ? <p><strong>Quest:</strong> {this.props.story_quest}</p> : null}
                        { this.props.note !== null ? this.props.note !== undefined ? <p><strong>Note:</strong> {this.props.note}</p> : null : null}
                        <p className="likes"><span className="heart">&hearts;</span>    {this.state.likes}</p>
                        <p><strong>Click if you love this loot!</strong></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Loot;