import { TalentName } from 'types/TalentName';

export interface Talent {
  id: string;
  selected?: boolean;
  type: TalentName;
}
