import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // eslint-disable-next-line no-unused-vars
  Link,
  NavLink
} from "react-router-dom";
import Quotes from './Quotes.js';
import Character from './Character.js';
import Create from './Create.js';
import EditQuote from './EditQuote.js';
import CharacterSelect from './CharacterSelect.js';
import Home from './Home.js';
import EditCharacter from './EditCharacter.js';

export default class App extends Component {
  render() {
        return (
              <div className="Main">
                      <Router>
                          <header>
                              <NavLink
                              className="NavLink"
                              exact activeClassName='active-link' to='/'>Home</NavLink>
                              <NavLink
                              className="NavLink"
                              exact activeClassName='active-link' to='/Characters'>Characters</NavLink>
                              <NavLink
                              className="NavLink"
                              exact activeClassName='active-link' to='/Quotes'>Quotes</NavLink>
                              <NavLink
                              className="NavLink"
                              exact activeClassName='active-link' to='/Create'>Create</NavLink>
                          </header>
                            <Switch>
                                  <Route 
                                    path="/"
                                    exact render={(routerProps) => <Home {...routerProps}/>} 
                                  />
                                  <Route 
                                    path="/Characters"
                                    exact render={(routerProps) => <Character {...routerProps}/>} 
                                  />
                                  <Route 
                                    path="/Quotes"
                                    exact render={(routerProps) => <Quotes {...routerProps}/>} 
                                  />
                                  <Route 
                                    path="/Create"
                                    exact render={(routerProps) => <Create {...routerProps}/>} 
                                  />
                                  <Route 
                                    path="/EditQuote/:id"
                                    exact render={(routerProps) => <EditQuote {...routerProps}/>} 
                                  />
                                  <Route 
                                    path="/CharacterSelect/:id"
                                    exact render={(routerProps) => <CharacterSelect {...routerProps}/>} 
                                  />
                                  <Route 
                                    path="/EditCharacter/:id"
                                    exact render={(routerProps) => <EditCharacter {...routerProps}/>} 
                                  />
                                  
                            </Switch>
                      </Router>
              </div>
        )
      }
}
