import React from 'react';
import { hot } from 'react-hot-loader';
import { TalentTree } from 'components/TalentTree';
import { Header } from 'foundation/Header';
import { TalentLoadout } from 'types/TalentLoadout';

import Styles from './App.module.scss';

const loadout: TalentLoadout = [{
  name: 'Talent Path 1',
  talent: {
    id: 'Chevron', selected: true, unlocks: {
      id: 'Chevron', selected: true, unlocks: {
        id: 'Chevron', selected: false, unlocks: {
          id: 'Chevron', selected: false,
        },
      },
    },
  },
}, {
  name: 'Talent Path 2',
  talent: {
    id: 'Chevron', selected: false, unlocks: {
      id: 'Chevron', selected: false,
    },
  },
}, {
  name: 'Talent Path 3',
  talent: {
    id: 'Chevron', selected: true, unlocks: {
      id: 'Chevron', selected: true, unlocks: {
        id: 'Chevron', selected: true, unlocks: {
          id: 'Chevron', selected: true,
        },
      },
    },
  },
}, {
  name: 'Talent Path 4',
  talent: {
    id: 'Chevron', selected: true,
  },
}];

export function App() {
  return (
    <div className={Styles.App}>
      <div className={Styles.Header}>
        <Header />
      </div>
      <div className={Styles.Content}>
        <TalentTree loadout={loadout} />
      </div>
    </div>
  );
}

export default hot(module)(App);
