// @flow

import React, { Component } from 'react';
import { Container } from 'rebass';
import Square from './Square';

class BingoCard extends Component<Props, State> {
  state = {
    squares: ['hello', 'goodbye', 'shalom']
  };

  renderSquare = (phrase: string) => <Square text={phrase} />;

  render() {
    return (
      <div>
        <Container my={2}>
          {this.state.squares.map(string => this.renderSquare(string))}
        </Container>
      </div>
    );
  }
}

export default BingoCard;
