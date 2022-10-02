import { Injectable } from '@angular/core';
import { EMPTY_DECK, NEW_GAME_SETTINGS } from '@core/constants';
import { GameState, GameType, NewDeckResponse, Player } from '@core/models';
import { createNewPLayer } from '@core/utils';
import { tap } from 'rxjs/internal/operators/tap';
import { DeskService } from './desk.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public current_game: GameType | undefined = undefined;

  public current_desk: (NewDeckResponse & GameState) | undefined = {
    ...EMPTY_DECK,
    isFetching: false,
  };

  public current_players: Player[] = [];

  constructor(private deskService: DeskService) {}

  public generateComputerPlayers() {
    if (!this.current_game) return [];
    const { players } = NEW_GAME_SETTINGS[this.current_game];

    for (let i = 0; i < players.computer; i++) {
      this.current_players.push(createNewPLayer(i, 'COMPUTER'));
    }

    for (let i = 0; i < players.human; i++) {
      this.current_players.push(createNewPLayer(i + players.computer, 'HUMAN'));
    }
    return this.current_players || [];
  }

  public startNewGame() {
    if (!this.current_game) return;

    const { decks } = NEW_GAME_SETTINGS[this.current_game];

    return this.deskService
      .getNewDesks(decks)
      .pipe(
        tap((data) => (this.current_desk = { ...data, isFetching: false }))
      );
  }

  public clearGame() {
    this.current_game = undefined;
    this.current_desk = undefined;
    this.current_players = [];
  }
}
