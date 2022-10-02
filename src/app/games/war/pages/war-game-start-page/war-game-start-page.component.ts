import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameService } from '@core/services';

@Component({
  selector: 'war-war-game-start-page',
  templateUrl: './war-game-start-page.component.html',
  styleUrls: ['./war-game-start-page.component.scss'],
})
export class WarGameStartPageComponent implements OnInit, OnDestroy {
  constructor(public gameService: GameService) {}

  public isLoading = true;

  ngOnInit(): void {
    this.gameService.startNewGame()?.subscribe(() => {
      if (this.gameService.current_desk?.success) {
        this.isLoading = false;
        console.log(this.gameService.current_desk);
      }
    });
  }

  ngOnDestroy(): void {
    this.gameService.clearGame();
  }
}
