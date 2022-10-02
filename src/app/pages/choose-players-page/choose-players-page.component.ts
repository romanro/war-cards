import { Component, OnInit } from '@angular/core';
import { Player } from '@core/models';
import { GameService } from '@core/services';

@Component({
  selector: 'app-choose-players-page',
  templateUrl: './choose-players-page.component.html',
  styleUrls: ['./choose-players-page.component.scss'],
})
export class ChoosePlayersPageComponent implements OnInit {
  computerPlayers: Player[] = [];
  humanPlayers: Player[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    const players = this.gameService.generateComputerPlayers();

    this.computerPlayers = [...players?.filter((p) => p.type === 'COMPUTER')];
    this.humanPlayers = [...players?.filter((p) => p.type === 'HUMAN')];
  }
}
