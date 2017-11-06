import React from 'react';
import { Heading } from 'rebass';

const Headline = (props: { text: string }) => (
  <Heading
    style={{ fontFamily: 'Damion' }}
    f={[5, 6, 7]}
    my={[3, 4]}
    center
    color="#001F3F"
    children={props.text}
  />
);

export default Headline;
