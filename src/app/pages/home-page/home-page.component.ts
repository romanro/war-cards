import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameType } from '@core/models';
import { GameService } from '@core/services';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router, private gameService: GameService) {}

  navigateToPlayers(gameType: GameType) {
    this.gameService.current_game = gameType;
    this.router.navigate(['players']);
  }

  ngOnInit(): void {}
}
