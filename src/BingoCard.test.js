import React from 'react';
import { shallow } from 'enzyme';
import BingoCard from './BingoCard';

it('renders without crashing', () => {
  shallow(<BingoCard />);
});
