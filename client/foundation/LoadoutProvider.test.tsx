import React from 'react';
import { shallow } from 'enzyme';
import { LoadoutProvider, Props } from 'foundation/LoadoutProvider';

describe('<LoadoutProvider />', () => {
  let defaultProps: Props;

  beforeEach(() => {
    defaultProps = {
      children: <div>Hello World!</div>,
    };
  });

  it('renders with children', () => {
    const props = { ...defaultProps };

    const wrapper = shallow(
      <LoadoutProvider {...props} />
    );

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('div').exists).toBeTruthy();
  });
});
