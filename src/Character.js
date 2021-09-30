import React, { Component } from 'react';
import request from 'superagent';
import './App.css'

export default class Character extends Component {
    state = {
            characters:[],
        }
    
        componentDidMount = async () => {
            const response = await request.get('https://katie-lab06b.herokuapp.com/characters')

            this.setState({characters: response.body})
    }
    render() {
        return (
            <div className="CharDiv">
                {
                this.state.characters
                .map(char => 
                    <div className="CharEl">
                        <span>{char.name}</span>
                        <img src={char.img} alt={char.name}/>
                        <span>weapon of choice: {char.weapon}</span>
                        <span>age: {char.age}</span>
                        <span>gem type:{char.gem_type}</span>
                    </div>
                    )}
            </div>
        )
    }
}
