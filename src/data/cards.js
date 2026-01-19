// cards.js
// This file defines all possible card TYPES in the game

const suits = ["clubs", "diamonds", "hearts", "spades"];
const ranks = [
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" },
  { value: 11, label: "Jack" },
  { value: 12, label: "Queen" },
  { value: 13, label: "King" },
  { value: 14, label: "Ace" },
];

export const CARD_TYPES = suits.flatMap((suit) =>
  ranks.map((rank) => ({
    id: `${rank.label}_of_${suit}`,
    rank: rank.value,
    suit,
  })),
);
