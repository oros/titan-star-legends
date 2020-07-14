import { TalentName } from 'types/TalentName';

export interface Talent {
  id: TalentName;
  selected?: boolean;
  unlocks?: Talent;
}
