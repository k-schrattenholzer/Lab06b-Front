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
                            <span className="CharacterName">{character_name}</span>
                            <img src={img} alt={character_name}/>
                            <div className="StatsEl">
                                <span className="StatSpan">
                                    <h3>species:</h3> {species}</span>
                                <span className="StatSpan">
                                    <h3>weapon of choice:</h3> {weapon}</span>
                                <span className="StatSpan">
                                    <h3>age:</h3> {age}</span>
                                <span className="StatSpan">
                                    <h3>gem type:</h3> {gem_type}</span>
                            </div>
                        </div>
                    </Link>
                    )}
            </div>
        )
    }
}
