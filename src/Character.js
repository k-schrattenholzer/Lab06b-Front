import React, { Component } from 'react';
import './App.css';
import { fetchCharacterInfo } from './fetch-utils.js';

export default class Character extends Component {
    state = {
            characters:[],
        }
    
        componentDidMount = async () => {
            const response = await fetchCharacterInfo();
            this.setState({characters: response})
    }
    render() {
        return (
            <div className="CharDiv">
                {
                this.state.characters
                .map(({
                    character_id,
                    character_name,
                    species,
                    weapon,
                    age,
                    img,
                    gem_type
                })=> 
                    <div 
                    className="CharEl"
                    key={`${character_id}`}>
                        <span>{character_name}</span>
                        <img src={img} alt={character_name}/>
                        <span>species: {species}</span>
                        <span>weapon of choice: {weapon}</span>
                        <span>age: {age}</span>
                        <span>gem type: {gem_type}</span>
                    </div>
                    )}
            </div>
        )
    }
}
