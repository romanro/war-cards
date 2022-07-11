import { Component, OnInit } from '@angular/core';
import { DeskService } from '@core/services';

@Component({
  selector: 'war-war-game-start-page',
  templateUrl: './war-game-start-page.component.html',
  styleUrls: ['./war-game-start-page.component.scss'],
})
export class WarGameStartPageComponent implements OnInit {
  constructor(private deskService: DeskService) {}

  ngOnInit(): void {
    this.deskService.getNewDesks(1).subscribe((data) => console.log(data));
  }
}
