import React from 'react';
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

  const className = `
    ${Styles.Talent}
    ${Styles[type]}
    ${selected && Styles.Selected}
    ${isMaxedOut && Styles.MaxedOut}
  `;

  return (
    <div className={className} onClick={onClick} />
  );
}
