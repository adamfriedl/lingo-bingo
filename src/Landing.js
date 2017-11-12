// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Banner, Heading, Text, Button } from 'rebass';
import NavBar from './NavBar';

const photo =
  'https://images.unsplash.com/photo-1506701554939-d0aa4c26d79c?auto=format&fit=crop&w=1052&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D';

const Landing = () => (
  <div>
    <NavBar />
    <Banner
      backgroundImage={photo}
      color="#84e47b"
      py={[4, 5, 6]}
      mt={-3}
      mx={-3}>
      <Heading
        style={{ fontFamily: 'Damion' }}
        f={[5, 6, 7]}
        p={1}
        my={[2, 3]}
        color="#001F3F"
        bg="#84e47b">
        Lingo Bingo
      </Heading>
      <Text f={[2, 3, 4]} p={1} center bg="#001F3F">
        Are Bingo and conference calls your core competencies? <br />
        Sounds like an opportunity for synergy.
      </Text>
      <Link to="/bingocard">
        <Button
          my={[2, 3]}
          children="Let's Play!"
          color="#001F3F"
          bg="#84e47b"
        />
      </Link>
    </Banner>
  </div>
);

export default Landing;
