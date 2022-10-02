import { Component, Input, OnInit } from '@angular/core';
import { Player } from '@core/models';

@Component({
  selector: 'ui-human-player-form',
  templateUrl: './human-player-form.component.html',
  styleUrls: ['./human-player-form.component.scss'],
})
export class HumanPlayerFormComponent implements OnInit {
  @Input() player: Player;
  constructor() {}

  ngOnInit() {}
}
