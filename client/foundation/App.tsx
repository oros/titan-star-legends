import React from 'react';
import { hot } from 'react-hot-loader';
import { Points } from 'components/Points';
import { TalentTree } from 'components/TalentTree';
import { Header } from 'foundation/Header';
import { LoadoutProvider } from 'foundation/LoadoutProvider';

import Styles from './App.module.scss';

export function App() {
  return (
    <LoadoutProvider>
      <div className={Styles.App}>
        <div className={Styles.Header}>
          <Header />
        </div>
        <div className={Styles.Talents}>
          <TalentTree />
        </div>
        <div className={Styles.Points}>
          <Points />
        </div>
      </div>
    </LoadoutProvider>
  );
}

export default hot(module)(App);
