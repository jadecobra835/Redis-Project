import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Home from './home';
import AllLinks from './allLinks';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="nav-bar-wrapper">
          <div className="nav-link-wrapper nav-link-header">
            <NavLink exact to="/">Redis Link Shortener</NavLink>
          </div>

          <div className="nav-link-wrapper nav-link-allLinks">
            <NavLink to="/links">All Links</NavLink>
          </div>
        </div>
        

        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              
              <Route path="/links" component={AllLinks} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
