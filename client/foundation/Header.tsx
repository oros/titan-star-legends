import React from 'react';

import Styles from './Header.module.scss';

export function Header() {
  return (
    <div className={Styles.Header}>
      <div className={Styles.Title}>
        TitanStar Legends
      </div>
      <div className={Styles.Subtitle}>
        <div>Rune Mastery Loadout</div>
        <div>&nbsp;Talent Calculator 9000&nbsp;</div>
      </div>
    </div>
  );
}
