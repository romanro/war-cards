import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameService } from '@core/services/game.service';

@Component({
  selector: 'war-war-game-start-page',
  templateUrl: './war-game-start-page.component.html',
  styleUrls: ['./war-game-start-page.component.scss'],
})
export class WarGameStartPageComponent implements OnInit, OnDestroy {
  constructor(public gameService: GameService) {}

  ngOnInit(): void {
    this.gameService
      .startNewGame('WAR')
      .subscribe(() => console.log(this.gameService.current_desk?.remaining));
  }

  ngOnDestroy(): void {
    this.gameService.clearGame();
  }
}
