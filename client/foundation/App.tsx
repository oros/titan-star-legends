import React from 'react';
import { hot } from 'react-hot-loader';

import Styles from './App.module.css';

export function App() {
  return (
    <div className={Styles.App}>
      <h1> Hello, World! </h1>
    </div>
  );
}

export default hot(module)(App);
