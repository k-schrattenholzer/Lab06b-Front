import React, { Component } from 'react';
import './App.css';
import { fetchCharacters } from './fetch-utils.js';

export default class Character extends Component {
    state = {
            characters:[],
        }
    
        componentDidMount = async () => {
            const response = await fetchCharacters();
            this.setState({characters: response})
    }
    render() {
        return (
            <div className="CharDiv">
                {
                this.state.characters
                .map(char => 
                    <div className="CharEl">
                        <span>{char.character_name}</span>
                        <img src={char.img} alt={char.character_name}/>
                        <span>species: {char.species}</span>
                        <span>weapon of choice: {char.weapon}</span>
                        <span>age: {char.age}</span>
                        <span>gem type: {char.gem_type}</span>
                    </div>
                    )}
            </div>
        )
    }
}
