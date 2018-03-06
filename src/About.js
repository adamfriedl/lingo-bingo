// @flow

import React from 'react';
import { Container, Heading, Text, Link } from 'rebass';
import NavBar from './NavBar';
import Headline from './Headline';

const About = () => (
  <div>
    <NavBar />
    <Headline text={'Lingo Bingo'} />
    <Container>
      <Heading my={[2, 3]} children="About" />
      <Text>
        A game inspired by some coworkers seeking relief from the ridiculous
        corporate-speak we endured on all those conference calls. Unbeknownst to
        us, the <Link href="https://en.wikipedia.org/wiki/Buzzword_bingo" children="concept" style={{textDecoration: 'none'}} /> has actually existed for quite a while. But that's no
        reason not to online-ify it!
        <br /><br />
        Play Lingo Bingo during your next conference call or meeting. It might
        even give you a reason to pay attention.
      </Text>
    </Container>
  </div>
);

export default About;
