import React, { useContext, useEffect, useState } from 'react';
import { TalentLoadout } from 'types/TalentLoadout';

const defaultTalentLoadout: TalentLoadout = [{
  name: 'Culinary Mastery',
  talents: [
    { id: 'talent-001', selected: false, type: 'Chevron' },
    { id: 'talent-002', selected: false, type: 'Cutlery' },
    { id: 'talent-003', selected: false, type: 'Cake' },
    { id: 'talent-004', selected: false, type: 'Crown' },
  ]
}, {
  name: 'Danger Zone',
  talents: [
    { id: 'talent-005', selected: false, type: 'Skull' },
    { id: 'talent-006', selected: false, type: 'Lightning' },
  ]
}, {
  name: 'Relaxation',
  talents: [
    { id: 'talent-007', selected: false, type: 'Boat' },
    { id: 'talent-008', selected: false, type: 'Snorkel' },
    { id: 'talent-009', selected: false, type: 'Crown' },
  ]
}, {
  name: 'Literally Just A Skull',
  talents: [
    { id: 'talent-010', selected: false, type: 'Skull' },
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

  const isMaxedOut = usedTalents === MAX_TALENTS;

  const resetTalentLoadout = () => {
    setTalentLoadout([...defaultTalentLoadout]);
  };

  const toggleTalentSelected = (talentGroupIndex: number, talentIndex: number) => {
    setTalentLoadout((talentLoadout) => {
      // Deep copy of TalentLoadout.
      const nextTalentLoadout: TalentLoadout =
        JSON.parse(JSON.stringify(talentLoadout));

      // Get the clicked TalentGroup and Talent.
      const activeTalentGroup = nextTalentLoadout?.[talentGroupIndex];
      const activeTalent = activeTalentGroup?.talents?.[talentIndex];

      // Ensure we were able to find the Talent.
      if (!activeTalent) {
        return talentLoadout;
      }

      // Defines what we intend to do for this Talent.
      const intendedSelection = !activeTalent.selected;

      if (intendedSelection) {
        let remainingSelections = MAX_TALENTS - usedTalents;

        // We want to select this Talent.
        activeTalentGroup?.talents.some((talent) => {
          // Ensure we don't go past our maximum allotment.
          if (remainingSelections === 0) {
            return true;
          }

          // Select this Talent if it needs to be added.
          if (!talent.selected) {
            talent.selected = true;
            remainingSelections -= 1;
          }

          // Stop once we reach our clicked Talent.
          return (talent.id === activeTalent.id);
        });
      } else {
        let bypassTalent = true;

        // We want to unselect this Talent.
        activeTalentGroup?.talents.some((talent) => {
          // If we hit our clicked Talent, stop bypassing.
          if (talent.id === activeTalent.id) {
            bypassTalent = false;
          }

          // Skip all of the initial Talents until we find the clicked one.
          if (bypassTalent) {
            return false;
          }

          // If we find an unselected Talent, no need to keep going.
          if (!talent.selected) {
            return true;
          }

          // Unselect this Talent.
          talent.selected = false;
        });
      }

      return nextTalentLoadout;
    });
  };

  return {
    isMaxedOut,
    maxTalents: MAX_TALENTS,
    resetTalentLoadout,
    setTalentLoadout,
    talentLoadout,
    toggleTalentSelected,
    usedTalents,
  }
}

export interface Props {
  children: React.ReactNode;
}

export function LoadoutProvider({ children }: Props) {
  const [talentLoadout, setTalentLoadout] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const queryTalentLoadout = params.get('loadout');

    try {
      // Attempt to parse the URL to use an existing loadout.
      const explicitTalentLoadout = JSON.parse(atob(queryTalentLoadout));
      return explicitTalentLoadout;
    } catch { }

    // Return the default loadout.
    return defaultTalentLoadout;
  });

  return (
    <Context.Provider value={{ talentLoadout, setTalentLoadout }}>
      {children}
    </Context.Provider>
  );
}
