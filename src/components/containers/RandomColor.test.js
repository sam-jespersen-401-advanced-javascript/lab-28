import React from 'react';
import { shallow } from 'enzyme';
import RandomColor from './RandomColor';

describe('ColorContainer module', () => {
  it('renders a color container', () => {
    const wrapper = shallow(<RandomColor />);
    wrapper.setState({ backgroundColor: 'red' });
    expect(wrapper).toMatchSnapshot();
  });
});
