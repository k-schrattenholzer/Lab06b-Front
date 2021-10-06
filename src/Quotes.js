import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchQuotes } from './fetch-utils.js';
import './App.css'

export default class Quotes extends Component {
    state = {
            quotesArr:[],
        }
    
        componentDidMount = async () => {

            const response = await fetchQuotes();

            this.setState({quotesArr: response})

    }
    render() {
        
        return (
            <div className="QuoteDiv">
                <h4>Quotes</h4>
                {
                this.state.quotesArr
                .map(quote => 
                    <Link to={`edit/${quote.id}`}>
                        <div className="QuoteEl">
                            <img className="QCharImg" src={quote.img} alt={quote.character_name}/>
                            <span className="QCharName">{quote.character_name}: </span>
                            <span className="QCharQuote">"{quote.quote}"</span>
                            <hr />
                        </div>
                    </Link>
                    )}
            </div>
        )
    }
}