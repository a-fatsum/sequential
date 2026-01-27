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

  // create your condition here - queen_of_hearts
  // const sampleImageSource = `/cards/${deckStyle}/${card.id}.svg`;
  const sampleImageSourceClassic2 = `/cards/${deckStyle}/queen_of_clubs2.svg`;
  // const sampleImageSourceClassic1 = `/cards/${deckStyle}/queen_of_clubs.svg`;
  const sampleImageSourceClassic1 = `/cards/${deckStyle}/queen_of_clubs.svg`;

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
        sampleImageSourceClassic1={sampleImageSourceClassic1}
        sampleImageSourceClassic2={sampleImageSourceClassic2}
      />
    </>
  );
}

export default App;
