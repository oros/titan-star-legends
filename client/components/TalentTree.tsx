import React from 'react';
import { Talent } from 'components/Talent';
import { Talent as TalentType } from 'types/Talent';
import { TalentLoadout } from 'types/TalentLoadout';

import Styles from './TalentTree.module.scss';

const renderTalentPath = (talent: TalentType): React.ReactNode => {
  if (!talent) {
    return null;
  }

  const className = `
    ${Styles.NodePath}
    ${talent?.unlocks?.selected && Styles.Selected}
  `;

  return (
    <>
      <div className={Styles.Node}>
        <Talent id={talent?.id} selected={talent?.selected} />
      </div>
      {talent?.unlocks && <div className={className} />}
      {renderTalentPath(talent?.unlocks)}
    </>
  );
}

export interface Props {
  loadout: TalentLoadout;
}

export function TalentTree({ loadout }: Props) {
  return (
    <div className={Styles.TalentTree}>
      {loadout.map(({ name, talent }) => {
        return (
          <div className={Styles.TalentGroup}>
            <span className={Styles.TalentName}>{name}</span>
            {renderTalentPath(talent)}
          </div>
        );
      })}
    </div>
  );
}
