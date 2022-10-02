import { Injectable } from '@angular/core';
import { ApiEndPoint, NewDeckParams, NewDeckResponse } from '@core/models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class DeskService {
  private readonly PREFIX: ApiEndPoint = 'deck';

  constructor(private api: ApiService) {}

  public getNewDesks({
    deck_count,
    jokers_enabled = false,
    cards = [],
    shuffled = true,
  }: NewDeckParams) {
    const queryString = new URLSearchParams({
      deck_count: deck_count.toString(),
      jokers_enabled: jokers_enabled.toString(),
    });

    if (cards.length > 0) {
      queryString.append('cards', cards.join(','));
    }

    return this.api.get<NewDeckResponse>(
      `${this.PREFIX}/new/${
        shuffled ? 'shuffle/' : ''
      }?${queryString.toString()}`
    );
  }
}
