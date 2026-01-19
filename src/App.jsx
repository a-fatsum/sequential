import CardsTable from "./components/CardsTable";
import { useState } from "react";
import { CARD_TYPES } from "./data/cards";

// == To do TASKs <<------------------------     - - - - - - - - - - - - - -- - - - -  - -- To do TASKs -- - - - - -
// -- Create a state to store the decks style and render a card just anywhere for now.
//    | -- rename/reformat data

// == To do TASKs <<------------------------     - - - - - - - - - - - - - -- - - - -  - -- To do TASKs -- - - - - -

function App() {
  const [deckStyle, setDeckStyle] = useState("classic-1");
  // const imagePath = `/cards/${deckStyle}/${card.id}.svg`;

  const selectedDeck = CARD_TYPES;
  console.log("deckStyle", deckStyle);
  console.log("♥️♣️♦️♠️", selectedDeck);

  //
  return (
    <>
      <CardsTable
        deckStyle={deckStyle}
        setDeckStyle={setDeckStyle}
        selectedDeck={selectedDeck}
      />
    </>
  );
}

export default App;
