import React, { Component } from 'react';
import './App.css'
import { updateQuote, fetchCharactersList, fetchSingleQuote } from './fetch-utils.js';


export default class Create extends Component {
    state = {
        character_list:[],
        quote: '',
        character_select: ''
    }
    
    componentDidMount = async () => {
        const charactersList = await fetchCharactersList();
        const quote = await fetchSingleQuote(this.props.match.params.id);


        this.setState({
            character_list: charactersList,
            quote: quote.quote
        })
    };

    handleSubmitQuote = async e => {
        e.preventDefault();

        const newQuote = {
            character_id: Number(this.state.character_select),
            quote: this.state.quote
        }

        await updateQuote(this.props.match.params.id, newQuote);

    }

    render() {
       console.log(this.state)
        return ( 
            <div className="Create">
                <div className="CreateQuote">
                    <h4>Edit the Quote!</h4>
                    <form onSubmit={this.handleSubmitQuote}>
                        <label >
                            Quote
                            <input
                            onChange={(e) => this.setState({ quote: e.target.value })}
                            defaultValue={this.state.quote} />
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
            </div>
        )
    }
}