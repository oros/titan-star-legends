import React, { useEffect } from 'react';
import { useTalentLoadout } from 'foundation/LoadoutProvider';

import Styles from './Points.module.scss';

export function Points() {
  const {
    isMaxedOut,
    maxTalents,
    resetTalentLoadout,
    setTalentLoadout,
    talentLoadout,
    usedTalents,
  } = useTalentLoadout();

  useEffect(() => {
    const pageUrl = `?loadout=${btoa(JSON.stringify(talentLoadout))}`;
    window.history.pushState('', '', pageUrl);
  }, [talentLoadout]);

  const className = `
    ${Styles.PointsContainer}
    ${isMaxedOut && Styles.MaxedOut}
  `;

  return (
    <div className={Styles.Points}>
      <div className={className}>
        <div className={Styles.Spent}>
          {`${usedTalents} / ${maxTalents}`}
        </div>
        <div className={Styles.Label}>
          Points Spent
        </div>
        <div
          className={Styles.Reset}
          onClick={resetTalentLoadout}
          role="button"
        >
          Reset
        </div>
      </div>
    </div>
  );
}
