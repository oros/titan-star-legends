import React from 'react';
import { useTalentLoadout } from 'foundation/LoadoutProvider';

import Styles from './Points.module.scss';

export function Points() {
  const { maxTalents, talentLoadout, usedTalents } = useTalentLoadout();

  return (
    <div className={Styles.Points}>
      <div className={Styles.PointsContainer}>
        <div className={Styles.Spent}>
          {`${usedTalents} / ${maxTalents}`}
        </div>
        <div className={Styles.Label}>
          Points Spent
        </div>
      </div>
    </div>
  );
}
