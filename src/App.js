import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Quotes from './Quotes.js';
import Character from './Character.js';

export default class App extends Component {
  render() {
    return (
      <div className="Main">
        <Router>
            <Switch>
              <Route exact path="/">
                <h1>Welcome to the Universe</h1>
                <Link to='/Characters'>Characters</Link>
                <Link to='/Quotes'>Quotes</Link>
                <Link to='/Admin'>Admin</Link>
              </Route>
              <Route path="/Characters">
                <Character />
              </Route>
              <Route path="/Quotes">
                <Quotes />
              </Route>
            </Switch>
        </Router>
      </div>
    )
  }
}
