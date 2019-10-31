import React from 'react';
import { shallow } from 'enzyme';
import ColorDisplay from './ColorDisplay';

describe('ColorDisplay module', () => {
  it('renders a colorDisplay', () => {
    const wrapper = shallow(<ColorDisplay backgroundColor="red" />);
    expect(wrapper).toMatchSnapshot();
  });
});
