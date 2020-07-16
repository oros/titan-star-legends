import React from 'react';
import classNames from 'classnames';
import { useTalentLoadout } from 'foundation/LoadoutProvider';
import { TalentName } from 'types/TalentName';

import Styles from './Talent.module.scss';

export interface Props {
  disabled: boolean;
  onClick(): void;
  selected: boolean;
  type: TalentName;
}

export function Talent({
  disabled,
  onClick,
  selected,
  type,
}: Props) {
  const { isMaxedOut } = useTalentLoadout();

  const talentClassNames = classNames(
    Styles.Talent,
    { [Styles.Disabled]: disabled },
    { [Styles.MaxedOut]: isMaxedOut },
    { [Styles.Selected]: selected },
  );

  const buttonClassNames = classNames(
    Styles.Button,
    Styles[type],
  );

  return (
    <div className={talentClassNames}>
      <button
        aria-label={type}
        className={buttonClassNames}
        disabled={disabled}
        onClick={onClick}
        title={`${type}${disabled ? ' - Not enough points' : ''}`}
        type="button"
      />
    </div>
  );
}
