import React from 'react';
import classNames from 'classnames';
import { useTalentLoadout } from 'foundation/LoadoutProvider';
import { TalentName } from 'types/TalentName';

import Styles from './Talent.module.scss';

export interface Props {
  onClick(): void;
  selected: boolean;
  type: TalentName;
}

export function Talent({
  onClick,
  selected,
  type,
}: Props) {
  const { isMaxedOut } = useTalentLoadout();

  const talentClassNames = classNames(
    Styles.Talent,
    Styles[type],
    { [Styles.Selected]: selected },
    { [Styles.MaxedOut]: isMaxedOut },
  );

  return (
    <div className={talentClassNames} onClick={onClick} />
  );
}
