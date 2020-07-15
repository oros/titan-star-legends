import React, { useEffect } from 'react';
import { useTalentLoadout } from 'foundation/LoadoutProvider';

import Styles from './Points.module.scss';

export function Points() {
  const { maxTalents, setTalentLoadout, talentLoadout, usedTalents } = useTalentLoadout();

  useEffect(() => {
    const pageUrl = `?loadout=${btoa(JSON.stringify(talentLoadout))}`;
    window.history.pushState('', '', pageUrl);
  }, [talentLoadout]);

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
