import React, { Component } from 'react';
import './App.css'
import { fetchCharactersList } from './fetch-utils.js';

export default class Create extends Component {
    state = {
        character_list:[],
        quote: '',
        character_select: 1
    }
    
    componentDidMount = async () => {
        const charactersList = await fetchCharactersList();

        this.setState({character_list: charactersList})
    };

    handleSubmit = e => {
        e.preventDefault();

        console.log(this.state)
    }

    render() {
       
        return ( 
            <div className="Create">
                <div className="CreateQuote">
                    <h4>Add Your Fav SU Quote!</h4>
                    <form onSubmit={this.handleSubmit}>
                        <label onChange={(e) => this.setState({ quote: e.target.value })}>
                            Quote
                            <input />
                        </label>
                        <label onChange={(e) => this.setState({ character_select: e.target.value })}>
                            Character
                                <select>
                                {
                                    this.state.character_list
                                    .sort((a, b) => (a.character_name > b.character_name) ? 1 : -1)
                                    .map(
                                        character =>
                                        <option
                                        key={character.id}
                                        value={character.id}
                                        >
                                            {character.character_name}
                                        </option>
                                    )}
                                </select>
                        </label>
                        <button>
                            Add
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}