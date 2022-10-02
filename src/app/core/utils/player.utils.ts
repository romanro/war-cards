import { NewGamePlayerSettings, Player, PlayerType } from '@core/models';

export const createNewPLayer = (id: number, type: PlayerType): Player => {
  return {
    id: `player_${id}`,
    name: type === 'HUMAN' ? '' : 'New Player',
    type,
  };
};

export const createNewPlayers = (settings: NewGamePlayerSettings): Player[] => {
  const players: Player[] = [];
  // for (let i = 0; i < settings.computer; i++) {
  //   players.push;
  // }
  return players;
};
