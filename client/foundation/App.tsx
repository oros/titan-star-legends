import React from 'react';
import { hot } from 'react-hot-loader';

import Styles from './App.module.scss';

export function App() {
  return (
    <div className={Styles.App} />
  );
}

export default hot(module)(App);
