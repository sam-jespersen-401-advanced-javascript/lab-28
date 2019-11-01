import React from 'react';
import { shallow } from 'enzyme';
import ColorContainer from './ColorContainer';

describe('ColorContainer module', () => {
  it('renders a color container', () => {
    const wrapper = shallow(<ColorContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
