import React, { Component } from 'react';
import request from 'superagent';
import './App.css'

export default class Create extends Component {
    state = {
            quotesArr:[],
        }
    
        componentDidMount = async () => {
            const response = await request.get('https://katie-lab06b.herokuapp.com/quotes')

            this.setState({quotesArr: response.body})
    }
    render() {
        return (
            <div className="QuoteDiv">
                <h4>Quotes</h4>
                {
                this.state.quotesArr
                .map(quote => 
                    <div className="QuoteEl">
                        <img className="QCharImg" src={quote.img} alt={quote.character_name}/>
                        <span className="QCharName">{quote.character_name}: </span>
                        <span className="QCharQuote">"{quote.quote}"</span>
                        <hr />
                    </div>
                    )}
            </div>
        )
    }
}