import React from 'react';
import { shallow } from 'enzyme';
import Headline from '../Headline';

it('renders', () => {
  const component = shallow(<Headline />);
  expect(component).toMatchSnapshot();
});
