import { NewDeckResponse } from '@core/models';

export const EMPTY_DECK: NewDeckResponse = {
  success: false,
  deck_id: '',
  shuffled: false,
  remaining: 0,
};
