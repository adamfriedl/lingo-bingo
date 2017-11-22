// @flow

import React from 'react';
import { Flex, Box, Text } from 'rebass';
import styled from 'styled-components';

const CustomFlex = styled(Flex)`
  float: left;
  width: 17%;
  border: 5px solid #001f3f;

  :after {
    content: '';
    display: inline;
    padding-bottom: 100%;
  }
`;

const CustomBox = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
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
      bg={props.clicked ? 'teal3' : 'white'}
      mr={1}
      mb={1}
      onClick={props.onClick}>
      <Flex wrap>
        <Text f={[1, 2, 3]} p={1} center color="blue9">
          {props.text}
        </Text>
      </Flex>
    </CustomFlex>
  </div>
);

export default Square;
