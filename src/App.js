// @flow

import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing';
import About from './About';
import BingoCard from './BingoCard';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div>
        <Router basename={'lingo-bingo'}>
          <div>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              component={Landing}
            />
            <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
            <Route
              path={`${process.env.PUBLIC_URL}/bingocard`}
              component={BingoCard}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
