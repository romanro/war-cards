import { NewDescParams } from './deck.models';

export type GameType = 'WAR';

export type GameSettings = {
  players: { computer: number; human: number };
  decks: NewDescParams;
};
