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
import Edit from './Edit.js';
import Home from './Home.js';

export default class App extends Component {
  render() {
        return (
              <div className="Main">
                      <Router>
                          <header>
                              <NavLink exact activeClassName='active-link' to='/'>Home</NavLink>
                              <NavLink exact activeClassName='active-link' to='/Characters'>Characters</NavLink>
                              <NavLink exact activeClassName='active-link' to='/Quotes'>Quotes</NavLink>
                              <NavLink exact activeClassName='active-link' to='/Create'>Create</NavLink>
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
                                    path="/Edit/:id"
                                    exact render={(routerProps) => <Edit {...routerProps}/>} 
                                  />
                            </Switch>
                      </Router>
              </div>
        )
      }
}
