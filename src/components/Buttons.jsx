const Buttons = ({
  setHand,
  //   shuffleTheDeck,
  dealTheCards,
  allCardsObj,
  setShuffledDeck,
}) => {
  return (
    <>
      <div className="flex gap-4">
        <button
          className="border rounded-sm p-2"
          //   onClick={() => setHand(shuffleTheDeck(allCardsObj))}
        >
          Shuffle
        </button>
        <button
          className="border rounded-sm p-2"
          onClick={() => setHand(dealTheCards(allCardsObj))}
        >
          Deal
        </button>
      </div>
    </>
  );
};
export default Buttons;
