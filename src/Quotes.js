import React, { Component } from 'react';
import request from 'superagent';
import './App.css'

export default class Quotes extends Component {
    state = {
            quotesArr:[],
        }
    
        componentDidMount = async () => {
            const response = await request.get('https://katie-lab06b.herokuapp.com/quotes')

            this.setState({quotesArr: response.body})
    }
    render() {
        return (
            <div>
                {
                this.state.quotesArr
                .map(quote => 
                    <div>
                        <span className="QCharName">{quote.character}: </span>
                        <span className="QCharQuote">"{quote.quote}"</span>
                        <hr />
                    </div>
                    )}
            </div>
        )
    }
}