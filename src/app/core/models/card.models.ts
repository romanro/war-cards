export type CardValue = 'A' | 2 | 3 | 4 | 6 | 7 | 8 | 9 | 0 | 'J' | 'Q' | 'K'; // The value, one of A (for an ace), 2, 3, 4, 5, 6, 7, 8, 9, 0 (for a ten), J (jack), Q (queen), or K (king);
export type CardSuit = 'S' | 'D' | 'C' | 'H'; // The suit, one of S (Spades), D (Diamonds), C (Clubs), or H (Hearts)

export type CardCode = `${CardValue}${CardSuit}`;
