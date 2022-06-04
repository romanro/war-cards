import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'war-war-game-start-page',
  templateUrl: './war-game-start-page.component.html',
  styleUrls: ['./war-game-start-page.component.scss'],
})
export class WarGameStartPageComponent implements OnInit {
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getNewDesks(1).subscribe((data) => console.log(data));
  }
}
