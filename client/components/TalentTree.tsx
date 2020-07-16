import React from 'react';
import classNames from 'classnames';
import { Talent } from 'components/Talent';
import { useTalentLoadout } from 'foundation/LoadoutProvider';
import { Talent as TalentType } from 'types/Talent';

import Styles from './TalentTree.module.scss';

export function TalentTree() {
  const { talentLoadout, toggleTalentSelected } = useTalentLoadout();

  return (
    <div className={Styles.TalentTree}>
      {talentLoadout.map(({ name, talents }, talentGroupIndex) => (
        <React.Fragment key={name}>
          <div className={Styles.TalentName}>
            {name}
          </div>
          <div className={Styles.TalentGroup} key={name}>
            {talents.map(({ id, selected, type }, talentIndex) => {
              const talentPathClassNames = classNames(
                Styles.TalentPath,
                { [Styles.Selected]: selected },
              );

              return (
                <React.Fragment key={id}>
                  <div className={talentPathClassNames} />
                  <Talent
                    onClick={() =>
                      toggleTalentSelected(talentGroupIndex, talentIndex)
                    }
                    selected={selected}
                    type={type}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
