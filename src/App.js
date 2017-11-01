// @flow

import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Landing from './Landing';
import BingoCard from './BingoCard';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div>
        <Nav />
        <Router>
          <div>
            <Route exact path="/" component={Landing} />
            <Route path="/bingocard" component={BingoCard} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
