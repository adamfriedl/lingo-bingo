// @flow

import React from 'react';
import { Absolute, Toolbar, NavLink, Link } from 'rebass';

const NavBar = props => {
  return (
    <div>
      <Absolute z={2} top left>
        <Toolbar bg="transparent">
          <NavLink is={Link} href="/" children="Home" />
          <NavLink is={Link} href="/about" children="About" />
        </Toolbar>
      </Absolute>
    </div>
  );
};
export default NavBar;
