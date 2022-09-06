import { CardCode } from './card.models';

export type NewDescParams = {
  deck_count: number;
  jokers_enabled?: boolean;
  cards?: CardCode[];
  shuffled?: boolean;
};
