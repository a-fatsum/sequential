export default function HandOfCards({ imageSource, hand }) {
  return (
    <>
      <div className="flex gap-4">
        {hand.map((setOfCards, i) => (
          <div className="flex gap-4 border-1 p-1 rounded-sm">
            {setOfCards.map((card, i) => (
              <img
                width="70"
                height="auto"
                src={card.ImageSrc}
                alt="Card Image"
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
