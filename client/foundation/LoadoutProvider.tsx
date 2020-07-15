import React, { useContext, useEffect, useState } from 'react';
import { TalentLoadout } from 'types/TalentLoadout';

const defaultTalentLoadout: TalentLoadout = [{
  name: 'Talent Path 1',
  talents: [
    { id: 'talent-001', selected: true, type: 'Chevron' },
    { id: 'talent-002', selected: true, type: 'Cutlery' },
    { id: 'talent-003', selected: false, type: 'Cake' },
    { id: 'talent-004', selected: false, type: 'Crown' },
  ]
}, {
  name: 'Talent Path 2',
  talents: [
    { id: 'talent-005', selected: false, type: 'Skull' },
    { id: 'talent-006', selected: false, type: 'Lightning' },
  ]
}, {
  name: 'Talent Path 3',
  talents: [
    { id: 'talent-007', selected: true, type: 'Boat' },
    { id: 'talent-008', selected: true, type: 'Snorkel' },
    { id: 'talent-009', selected: true, type: 'Crown' },
  ]
}, {
  name: 'Talent Path 4',
  talents: [
    { id: 'talent-010', selected: true, type: 'Skull' },
  ],
}];

export interface LoadoutContext {
  setTalentLoadout?: React.Dispatch<React.SetStateAction<TalentLoadout>>;
  talentLoadout: TalentLoadout;
}

const Context = React.createContext<LoadoutContext>({
  setTalentLoadout: undefined,
  talentLoadout: defaultTalentLoadout,
});

const MAX_TALENTS = 6;

export function useTalentLoadout() {
  const { talentLoadout, setTalentLoadout } = useContext(Context);

  const usedTalents = [].concat(...talentLoadout.map(({ talents }) =>
    talents.filter(({ selected }) => selected)
  )).length;

  const toggleTalentSelected = (talentGroupIndex: number, talentIndex: number) => {
    setTalentLoadout((talentLoadout) => {
      const nextTalentLoadout = [...talentLoadout];

      // Get the clicked Talent.
      const activeTalent =
        talentLoadout?.[talentGroupIndex]?.talents?.[talentIndex];

      // Ensure we were able to find the Talent.
      if (!activeTalent) {
        return talentLoadout;
      }

      // If the Talent is currently selected...
      if (activeTalent.selected) {
        // Get the next Talent in the tree.
        const nextTalentSelected =
          nextTalentLoadout?.[talentGroupIndex]?.talents?.[talentIndex + 1]?.selected;

        // If the next Talent in the tree is selected, do nothing.
        if (nextTalentSelected === true) {
          return talentLoadout;
        }
      } else {
        // Ensure we have enough points remaining.
        if (usedTalents === MAX_TALENTS) {
          return talentLoadout;
        }

        // Get the previous Talent in the three.
        const prevTalentSelected =
          nextTalentLoadout?.[talentGroupIndex]?.talents?.[talentIndex - 1]?.selected;

        // If the previous Talent in the tree is not selected, do nothing.
        if (prevTalentSelected === false) {
          return talentLoadout;
        }
      }

      // We're in a good state, and can toggle this Talent's selected state.
      activeTalent.selected = !activeTalent.selected;

      // Update our data source.
      return nextTalentLoadout;
    });
  };

  return {
    maxTalents: MAX_TALENTS,
    talentLoadout,
    toggleTalentSelected,
    usedTalents,
  }
}

export interface Props {
  children: React.ReactNode;
}

export function LoadoutProvider({ children }: Props) {
  const [talentLoadout, setTalentLoadout] = useState(defaultTalentLoadout);

  return (
    <Context.Provider value={{ talentLoadout, setTalentLoadout }}>
      {children}
    </Context.Provider>
  );
}
