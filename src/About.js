// @flowq

import React from 'react';
import { Container, Heading, Text } from 'rebass';
import NavBar from './NavBar';
import Headline from './Headline';

const About = () => (
  <div>
    <NavBar color="#001F3F" />
    <Headline text={'Lingo Bingo'} />
    <Container>
      <Heading my={[2, 3]} children="About" />
      <Text>
        Corporate-speak is the worst. If you have to listen to it, the least you
        can do is have some surreptitious fun at its expense. Play Lingo Bingo
        during your next conference call or meeting. It might even give you a
        reason to pay attention.
      </Text>
    </Container>
  </div>
);

export default About;
