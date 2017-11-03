// @flow

import React from 'react';
import { Absolute, Toolbar, NavLink, Link } from 'rebass';

const NavBar = (props: { color: string }) => {
  return (
    <div>
      <Absolute z={2} top left>
        <Toolbar w={'100%'} bg="transparent" color={props.color}>
          <NavLink is={Link} href="/" children="Home" />
          <NavLink is={Link} href="/#/about" children="About" />
        </Toolbar>
      </Absolute>
    </div>
  );
};
export default NavBar;
