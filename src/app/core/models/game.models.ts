import { NewDeckParams } from './deck.models';

export type GameState = {
  isFetching: boolean;
};

export type GameType = 'WAR';

export type NewGameSettings = {
  players: NewGamePlayerSettings;
  decks: NewDeckParams;
};

export type NewGamePlayerSettings = { computer: number; human: number };
