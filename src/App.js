import React, { Component } from 'react';
import Quotes from './Quotes.js';
import Character from './Character.js';

export default class App extends Component {
  render() {
    return (
      <div className="Main">
        <h1>Welcome to the Universe</h1>
        <Character />
        <hr/>
        <Quotes />
      </div>
    )
  }
}
