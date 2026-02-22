import CardsTable from "./components/CardsTable";
import { useState } from "react";
import { allCardsObj } from "./data/cards";

// == To do TASKs <<------------------------     - - - - - - - - - - - - - -- - - - -  - -- To do TASKs -- - - - - -
// -- Create a state to store the decks style and render a card just anywhere for now.
//    | -- rename/reformat data

// == To do TASKs <<------------------------     - - - - - - - - - - - - - -- - - - -  - -- To do TASKs -- - - - - -

function App() {
  const [deckStyle, setDeckStyle] = useState("classic-1");
  const imageSrc = `assets/${deckStyle}/queen_of_diamonds.svg`;
  // const imageSrc = allCardsObj[7].ImageSrc;

  //

  console.log("✅ ", allCardsObj[0].ImageSrc);

  // Handle cards shuffle
  function shuffleDeck(deck) {
    const cardsDeck = deck.flat();
    const shuffledDeck = [];

    for (let i = 0; i < cardsDeck.length; ) {
      const randNum = Math.floor(Math.random() * cardsDeck.length);
      const card = cardsDeck[randNum];
      if (!shuffledDeck.includes(card)) {
        shuffledDeck.push(card);
        i++;
      }
    }
    return shuffledDeck;
  }

  // Handle dealing cards
  function dealCards(deck) {
    const fourCards1 = [];
    const fourCards2 = [];
    const threeCards = [];
    //
    for (let i = 0; i < deck.length; i++) {
      if (!fourCards1.includes(deck[i]) && fourCards1.length < 4) {
        fourCards1.push(deck[i]);
      }
      if (!fourCards2.includes(deck[i]) && fourCards2.length < 4) {
        i++;
        fourCards2.push(deck[i]);
      }
      if (!threeCards.includes(deck[i]) && threeCards.length < 3) {
        i++;
        threeCards.push(deck[i]);
      }
    }
    return [fourCards1, fourCards2, threeCards];
  }

  //
  return (
    <>
      <CardsTable
        deckStyle={deckStyle}
        setDeckStyle={setDeckStyle}
        imageSrc={imageSrc}
      />
    </>
  );
}

export default App;
