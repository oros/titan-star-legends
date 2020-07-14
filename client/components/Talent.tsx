import React from 'react';
import { TalentName } from 'types/TalentName';

import Styles from './Talent.module.scss';

export interface Props {
  id: TalentName;
  selected?: boolean;
}

export function Talent({
  id,
  selected,
}: Props) {
  const className = `
    ${Styles.Talent}
    ${Styles[id]}
    ${selected && Styles.Selected}
  `;

  return (
    <div className={className} />
  );
}
