import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing';
import About from './About';
import BingoCard from './BingoCard';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div>
        <Router basename={`/${process.env.PUBLIC_URL}`}>
          <div>
            <Route
              exact
              path={`/${process.env.PUBLIC_URL}`}
              component={Landing}
            />
            <Route path="about" component={About} />
            <Route path="/bingocard" component={BingoCard} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
