import { GameService } from '@core/services';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class CanActivateChoosePlayers implements CanActivate {
  constructor(private gameService: GameService) {}

  canActivate(): boolean {
    return Boolean(this.gameService.current_game);
  }
}
