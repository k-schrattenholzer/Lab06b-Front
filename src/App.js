import React, { Component } from 'react';
import Quotes from './Quotes.js';
import Character from './Character.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Character />
        <hr/>
        <Quotes />
      </div>
    )
  }
}
