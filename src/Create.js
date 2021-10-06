import React, { Component } from 'react';
import request from 'superagent';
import './App.css'
import { fetchCharactersList } from './fetch-utils.js';

export default class Create extends Component {
    state = {
            characters:[],
        }
    
        componentDidMount = async () => {
            const charactersList = await fetchCharactersList();

            this.setState({characters: charactersList})
    }
    render() {
        console.log(this.state.characters)
        return (
            <div className="Create">
                <div className="CreateQuote">
                    <h4>Add Your Fav SU Quote!</h4>
                    <form>
                        <label>
                            Quote
                            <input />
                        </label>
                        <label>
                            Character
                                <select>
                                {
                                    this.state.characters.map(
                                        character =>
                                        <option
                                        value='character.id'
                                        key='character.id'>
                                            {character.character_name}
                                        </option>
                                )}
                                </select>
                        </label>
                    </form>
                </div>
            </div>
        )
    }
}