import React from 'react';
import { shallow } from 'enzyme';
import { Header } from 'foundation/Header';

describe('<Header />', () => {
  it('renders', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
