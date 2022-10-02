import { NewGameSettings, GameType } from '@core/models';

export const NEW_GAME_SETTINGS: Record<GameType, NewGameSettings> = {
  WAR: {
    players: { computer: 1, human: 1 },
    decks: {
      deck_count: 1,
      jokers_enabled: false,
    },
  },
};
