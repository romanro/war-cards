import { Component, Input, OnInit } from '@angular/core';
import { Player } from '@core/models';

@Component({
  selector: 'ui-computer-player',
  templateUrl: './computer-player.component.html',
  styleUrls: ['./computer-player.component.scss'],
})
export class ComputerPlayerComponent implements OnInit {
  @Input() player: Player;
  constructor() {}

  ngOnInit(): void {}
}
