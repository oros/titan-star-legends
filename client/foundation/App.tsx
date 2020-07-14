import React from 'react';
import { hot } from 'react-hot-loader';
import { Header } from 'foundation/Header';

import Styles from './App.module.scss';

export function App() {
  return (
    <div className={Styles.App}>
      <div className={Styles.Header}>
        <Header />
      </div>
      <div className={Styles.Content}></div>
    </div>
  );
}

export default hot(module)(App);
