import React, { Component } from 'react';
import request from 'superagent';
import './App.css'

export default class Characters extends Component {
    state = {
            characters:[],
            quotes:[]
        }
    
        componentDidMount = async () => {
            const response = await request.get('https://katie-lab06b.herokuapp.com/characters')

            this.setState({characters: response.body})
    }
    render() {
        return (
            <div>
                {
                this.state.characters
                .map(char => 
                    <div>
                        <span>{char.name}</span>
                        <img src={char.img} alt={char.name}/>
                        <span>age: {char.age}</span>
                        <span>gem type:{char.gem_type}</span>
                    </div>
                    )}
            </div>
        )
    }
}
