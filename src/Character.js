import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                .sort((a, b) => (a.character_name > b.character_name) ? 1 : -1)
                .map(({
                    character_id,
                    character_name,
                    species,
                    weapon,
                    age,
                    img,
                    gem_type
                })=> 
                    <Link to={`CharacterSelect/${character_id}`} >
                        <div 
                        className="CharEl"
                        key={`${character_id}`}>
                            <span>{character_name}</span>
                            <img src={img} alt={character_name}/>
                            <div className="StatsEl">
                                <span>species: {species}</span>
                                <span>weapon of choice: {weapon}</span>
                                <span>age: {age}</span>
                                <span>gem type: {gem_type}</span>
                            </div>
                        </div>
                    </Link>
                    )}
            </div>
        )
    }
}
