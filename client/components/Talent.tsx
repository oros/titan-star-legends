import React from 'react';
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
  const className = `
    ${Styles.Talent}
    ${Styles[type]}
    ${selected && Styles.Selected}
  `;

  return (
    <div className={className} onClick={onClick} />
  );
}
