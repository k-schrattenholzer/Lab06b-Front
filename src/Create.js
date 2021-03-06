import React, { Component } from 'react';
import './App.css'
import { createCharacter, createQuote, fetchCharactersList, updateCharacter } from './fetch-utils.js';

export default class Create extends Component {
    state = {
        character_list:[],
        quote: '',
        character_select: '',
        character_name: '',
        img: '',
        species: '',
        weapon:'',
        age:'',
        gem_type:''
    }
    
    componentDidMount = async () => {
        const charactersList = await fetchCharactersList();

        this.setState({character_list: charactersList})
    };

    handleSubmitQuote = async e => {
        e.preventDefault();

        const newQuote = {
            character_id: this.state.character_select,
            quote: this.state.quote
        }

        await createQuote(newQuote);

        this.props.history.push('/quotes')

    }

    handleSubmitCharacter= async e => {
        e.preventDefault();
        
        const newCharacter = {
            character_name: this.state.character_name
        }

        await createCharacter(newCharacter);

        const updatedCharacterList = await fetchCharactersList();

        this.setState({character_list: updatedCharacterList});

        document.getElementById('AddCharacterForm').classList.remove('Hide');
        document.getElementById('AddCharName').classList.add('Hide')
    }
    
    handleSubmitNewInfo = async e => {
        e.preventDefault();

        const updatedCharacterList = await fetchCharactersList();

        const newCharacterId = updatedCharacterList.find(character => character.character_name === this.state.character_name);

        const newCharacter = {
            img: this.state.img,
            species: this.state.species,
            gem_type: this.state.gem_type,
            weapon: this.state.weapon,
            age: this.state.age,
            character_id: newCharacterId
        }

        await updateCharacter(newCharacterId, newCharacter);

        console.log(newCharacterId)
        // this.props.history.push(`/CharacterSelect/${this.state.character_select}`
        // )

    }
    render() {
       console.log(this.state)
        return ( 
            <div className="Create">
                <div className="CreateEl CreateQuote">
                    <h4>Add a Quote</h4>
                    <form 
                    onSubmit={this.handleSubmitQuote}
                    className="QuoteInput"
                    >
                        <label onChange={(e) => this.setState({ quote: e.target.value })}>
                            Quote
                            <textarea />
                        </label>
                        <label >
                            Character
                                <select
                                    onChange={async (e) =>
                                        await this.setState({ character_select: e.target.value })}
                                >
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
                <div className="CreateEl CreateCharacter">
                    <h4>Add a Character</h4>
                    <form 
                    onSubmit={this.handleSubmitCharacter}
                    id="AddCharName"
                    >
                        <label onChange={(e) => this.setState({ character_name: e.target.value })}>
                            Character Name
                            <input />
                        </label>

                        <button
                        id='AddCharButton'
                        >
                            Add More Info
                        </button>
                    </form>
                </div>
                <div>
                <form 
                    onSubmit={this.handleSubmitNewInfo}
                    id="AddCharacterForm"
                    className="AddChar Hide"
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

                        <button >
                            Add
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}