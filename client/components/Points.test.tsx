import React from 'react';
import { shallow } from 'enzyme';
import { Points } from 'components/Points';
import { useTalentLoadout } from 'foundation/LoadoutProvider';

jest.mock('foundation/LoadoutProvider', () => {
  return {
    ...jest.requireActual('foundation/LoadoutProvider'),
    useTalentLoadout: jest.fn().mockReturnValue({
      isMaxedOut: false,
      maxTalents: 10,
      resetTalentLoadout: jest.fn(),
      setTalentLoadout: jest.fn(),
      talentLoadout: {},
      usedTalents: 0,
    }),
  };
});

const mockUseTalentLoadout = useTalentLoadout as jest.Mock;

describe('<Points />', () => {
  it('renders', () => {
    const wrapper = shallow(<Points />);

    expect(wrapper).not.toBeNull();
  });

  describe('PointsContainer', () => {
    it('omits styling when not maxed out', () => {
      mockUseTalentLoadout.mockReturnValueOnce({
        isMaxedOut: false,
      })

      const wrapper = shallow(<Points />);

      expect(wrapper.find('.PointsContainer').exists()).toBeTruthy();
      expect(wrapper.find('.PointsContainer.MaxedOut').exists()).toBeFalsy();
    });

    it('includes styling when maxed out', () => {
      mockUseTalentLoadout.mockReturnValueOnce({
        isMaxedOut: true,
      })

      const wrapper = shallow(<Points />);

      expect(wrapper.find('.PointsContainer').exists()).toBeTruthy();
      expect(wrapper.find('.PointsContainer.MaxedOut').exists()).toBeTruthy();
    });
  });

  describe('Spent', () => {
    it('renders the points spent and max points', () => {
      mockUseTalentLoadout.mockReturnValueOnce({
        usedTalents: 4,
        maxTalents: 10,
      })

      const wrapper = shallow(<Points />);

      expect(wrapper.find('.Spent').text()).toContain('4 / 10');
    });
  });

  describe('Reset', () => {
    it('triggers reset callback when clicked', () => {
      const resetTalentLoadout = jest.fn();

      mockUseTalentLoadout.mockReturnValueOnce({
        resetTalentLoadout,
      });

      const wrapper = shallow(<Points />);

      const resetButton = wrapper.find('.Reset');
      resetButton.simulate('click');
      resetButton.simulate('click');

      expect(resetTalentLoadout).toHaveBeenCalledTimes(2);
    });
  });
});
