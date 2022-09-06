import { Injectable } from '@angular/core';
import { NEW_GAME_SETTINGS } from '@core/constants';
import { GameType, NewDescResponse } from '@core/models';
import { tap } from 'rxjs/internal/operators/tap';
import { DeskService } from './desk.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public current_desk: NewDescResponse | undefined;

  constructor(private deskService: DeskService) {}

  public startNewGame(type: GameType) {
    const { decks } = NEW_GAME_SETTINGS[type];
    return this.deskService
      .getNewDesks(decks)
      .pipe(tap((data) => (this.current_desk = { ...data })));
  }

  public clearGame() {
    this.current_desk = undefined;
  }
}
