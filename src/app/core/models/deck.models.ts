import { CardCode } from './card.models';

export type NewDeckParams = {
  deck_count: number;
  jokers_enabled?: boolean;
  cards?: CardCode[];
  shuffled?: boolean;
};
