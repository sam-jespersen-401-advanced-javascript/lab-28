import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker component', () => {
  let selectColor = jest.fn();
  it('renders ColorPicker', () => {
    const wrapper = shallow(<ColorPicker colors={['red']} selectColor={selectColor} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls selectColor function onclick', () => {
    const wrapper = shallow(<ColorPicker colors={['red', 'green', 'purple']} selectColor={selectColor} />);
    wrapper.findWhere(el => el.key() === 'green').simulate('click');
    expect(selectColor).toHaveBeenCalledWith('green');
  });

});
