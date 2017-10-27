// @flow

import React, { Component } from 'react';
import { Container } from 'rebass';
import Square from './Square';
import Preload from './Preload';

// IMPLEMENT DURSTENFELD SHUFFLE
const data = Preload.sort().slice(0, 25);

class BingoCard extends Component<Props, State> {
  state = {
    squares: ['hello', 'goodbye', 'shalom']
  };

  renderSquare = (phrase: string) => <Square text={phrase} />;

  render() {
    return (
      <div>
        <Container my={2}>
          {data.map(string => this.renderSquare(string))}
        </Container>
      </div>
    );
  }
}

export default BingoCard;
