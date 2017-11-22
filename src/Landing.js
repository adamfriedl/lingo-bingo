// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Banner, Text, Button } from 'rebass';
import NavBar from './NavBar';
import Headline from './Headline';

const photo =
  'https://images.unsplash.com/photo-1506701554939-d0aa4c26d79c?auto=format&fit=crop&w=1052&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D';

const Landing = () => (
  <div>
    <NavBar />
    <Banner
      backgroundImage={photo}
      color="teal3"
      py={[4, 5, 6]}
      mt={-3}
      mx={-3}>
      <Headline text="Lingo Bingo" />
      <Text f={[2, 3, 4]} p={1} center bg="blue9">
        Are Bingo and conference calls your core competencies? <br />
        Sounds like an opportunity for synergy.
      </Text>
      <Link to="/bingocard">
        <Button my={[2, 3]} children="Let's Play!" color="blue9" bg="teal3" />
      </Link>
    </Banner>
  </div>
);

export default Landing;
