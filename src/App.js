import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing';
import About from './About';
import BingoCard from './BingoCard';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={Landing} />
      <Route path="/about" component={About} />
      <Route path="/bingocard" component={BingoCard} />
    </Router>
  );
};

export default App;
