import CardsTable from "./components/CardsTable";
import { useState } from "react";
import { CARD_TYPES } from "./data/cards";

// == To do TASKs <<------------------------     - - - - - - - - - - - - - -- - - - -  - -- To do TASKs -- - - - - -
// -- Create a state to store the decks style and render a card just anywhere for now.
//    | -- rename/reformat data

// == To do TASKs <<------------------------     - - - - - - - - - - - - - -- - - - -  - -- To do TASKs -- - - - - -

function App() {
  const [deckStyle, setDeckStyle] = useState("classic-1");

  const selectedDeck = CARD_TYPES;

  const sampleImageSourceClassic2 = `public/cards/${deckStyle}/queen_of_clubs2.svg`;

  const imageSrc = `assets/${deckStyle}/queen_of_diamonds.svg`;

  const sampleImageSourceClassic1 = `public/assets/classic-2/queen_of_diamonds.svg`;

  console.log("deck style -> ", deckStyle);
  console.log("sampleImageSourceClassic1 ", sampleImageSourceClassic1);
  // ("public/assets/classic-2/queen_of_diamonds.svg");

  //
  // console.log("deckStyle", deckStyle);
  // console.log("♥️♣️♦️♠️", selectedDeck);

  //
  return (
    <>
      <CardsTable
        deckStyle={deckStyle}
        setDeckStyle={setDeckStyle}
        selectedDeck={selectedDeck}
        imageSrc={imageSrc}
        sampleImageSourceClassic1={sampleImageSourceClassic1}
        sampleImageSourceClassic2={sampleImageSourceClassic2}
      />
    </>
  );
}

export default App;
