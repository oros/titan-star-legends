import React from 'react';

import Styles from './Header.module.scss';

export function Header() {
  return (
    <div className={Styles.Header}>
      <div className={Styles.Title}>
        TitanStar Legends
      </div>
      <div className={Styles.Subtitle}>
        Rune Mastery Loadout
      </div>
      <div className={Styles.Detail}>
        Talent Calculator 9000
      </div>
    </div>
  );
}
