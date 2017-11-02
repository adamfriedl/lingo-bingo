// @flow

import React from 'react';
import { Flex, Text } from 'rebass';
import styled from 'styled-components';

const CustomFlex = styled(Flex)`
  float: left;
  width: 17%;
  border: 5px solid #07c;

  :after {
    content: '';
    display: inline;
    padding-bottom: 100%;
  }
`;

const Square = (props: {
  text: string,
  clicked: boolean,
  onClick: () => void
}) => (
  <div>
    <CustomFlex
      align="center"
      justify="center"
      bg={props.clicked ? 'yellow' : 'white'}
      mr={1}
      mb={1}
      onClick={props.onClick}
    >
      <Flex wrap>
        <Text f={[1, 2, 3]} p={1} center color="blue">
          {props.text}
        </Text>
      </Flex>
    </CustomFlex>
  </div>
);

export default Square;
