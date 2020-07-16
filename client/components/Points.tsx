import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useTalentLoadout } from 'foundation/LoadoutProvider';

import Styles from './Points.module.scss';

export function Points() {
  const {
    isMaxedOut,
    maxTalents,
    resetTalentLoadout,
    talentLoadout,
    usedTalents,
  } = useTalentLoadout();

  useEffect(() => {
    const pageUrl = `?loadout=${btoa(JSON.stringify(talentLoadout))}`;
    window.history.pushState('', '', pageUrl);
  }, [talentLoadout]);

  const pointsContainerClassName = classNames(
    Styles.PointsContainer,
    { [Styles.MaxedOut]: isMaxedOut },
  );

  return (
    <div className={Styles.Points}>
      <div className={pointsContainerClassName}>
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
