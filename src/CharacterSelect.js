import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import { deleteCharacter, fetchCharactersList, fetchSingleCharacter } from './fetch-utils.js';


export default class CharacterSelect extends Component {
    state = {
        character_list:[],
        character_name:'',
        species:'',
        weapon:'',
        age:'',
        img:'',
        gem_type:'',
        selected_character: '',
        selected_id:''
    }
    
    componentDidMount = async () => {
        
        const charactersList = await fetchCharactersList();
        const selectedCharacter = await fetchSingleCharacter(this.props.match.params.id);


        this.setState({
            character_list: charactersList,
            selected_character: selectedCharacter,
            selected_id: selectedCharacter.character_id,
            character_name: selectedCharacter.character_name,
            species: selectedCharacter.species,
            weapon: selectedCharacter.weapon,
            age: selectedCharacter.age,
            img: selectedCharacter.img,
            gem_type: selectedCharacter.gem_type,
        })
    };

    handleDeleteCharacter = async e => {
        e.preventDefault();

        await deleteCharacter(this.state.selected_id);

        this.props.history.push(`/Characters`)
    }

    render() {

        return ( 
            <div className="SelectChar">
                <div 
                className="SelectedCharEl"
                key={`${this.state.character_id}`}>
                    <span>{this.state.character_name}</span>
                    <img src={this.state.img} alt={this.state.character_name}/>
                    <span>species: {this.state.species}</span>
                    <span>weapon of choice: {this.state.weapon}</span>
                    <span>age: {this.state.age}</span>
                    <span>gem type: {this.state.gem_type}</span>
                </div>
                <div
                className="Buttons">
                    <button><Link to={`/EditCharacter/${this.state.selected_id}`}>Edit</Link></button>
                    <button onClick={this.handleDeleteCharacter}>Delete</button>
                </div>
            </div>
        )
    }
}