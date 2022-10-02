export type PlayerType = 'HUMAN' | 'COMPUTER';

export type Player = {
  id: `player_${number}`;
  name: string;
  type: PlayerType;
};
