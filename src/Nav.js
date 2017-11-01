import React from 'react';
import { NavLink } from 'rebass';

const Nav = () => (
  <div>
    <NavLink href="/#" children="Home" />
    <NavLink href="/#/about" children="About" />
  </div>
);

export default Nav;
