import React, { Component } from 'react';
import './App.css'
import { fetchCharactersList, fetchSingleCharacter, updateCharacter } from './fetch-utils.js';


export default class EditCharacter extends Component {
    state = {
        character_list:[],
        character_name:'',
        species:'',
        weapon:'',
        age:'',
        img:'',
        gem_type:'',
        selected_character: '',
        selected_char_id:''
    }

    componentDidMount = async () => {
        
        const charactersList = await fetchCharactersList();
        const selectedCharacter = await fetchSingleCharacter(this.props.match.params.id);


        this.setState({
            character_list: charactersList,
            selected_character: selectedCharacter,
            selected_char_id: selectedCharacter.character_id,
            character_name: selectedCharacter.character_name,
            species: selectedCharacter.species,
            weapon: selectedCharacter.weapon,
            age: selectedCharacter.age,
            img: selectedCharacter.img,
            gem_type: selectedCharacter.gem_type,
        })
    };

        
    handleSubmitCharacter = async e => {
        e.preventDefault();

        const newCharacter = {
            img: this.state.img,
            species: this.state.species,
            gem_type: this.state.gem_type,
            weapon: this.state.weapon,
            age: this.state.age,
            character_id: this.state.selected_char_id,
        }

        await updateCharacter(this.props.match.params.id, newCharacter);

        this.props.history.push(`/CharacterSelect/${this.state.selected_char_id}`)

    }

    render() {
       console.log(this.state)
        return ( 
            <div className="Create">
                <div className="CreateQuote">
                    <h4>Edit {this.state.character_name}</h4>

                    <form 
                    onSubmit={this.handleSubmitCharacter}
                    >
                        
                        <p>Image URL</p>
                        <input 
                        onChange={(e) => this.setState({ img: e.target.value })}
                        value={this.state.img}/>
                        <p>Species</p>
                        <input 
                        onChange={(e) => this.setState({ species: e.target.value })}
                        value={this.state.species} />
                        <p>Weapon</p>
                        <input 
                        onChange={(e) => this.setState({ weapon: e.target.value })}
                        value={this.state.weapon}/>
                        <p>Age</p>
                        <input 
                        onChange={(e) => this.setState({ age: e.target.value })}
                        value={this.state.age} />
                        <p>Gem Type</p>
                        <input 
                        onChange={(e) => this.setState({ gem_type: e.target.value })}
                        value={this.state.gem_type} />

                        <button>
                            Update
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}