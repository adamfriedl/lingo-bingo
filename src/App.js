// @flow

import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing';
import About from './About';
import BingoCard from './BingoCard';
import Footer from './Footer';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/bingocard" component={BingoCard} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
