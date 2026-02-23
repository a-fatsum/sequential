export default function HandOfCards({ hand }) {
  return (
    <>
      <div className="flex gap-4">
        {hand.map((setOfCards, i) => (
          <div key={i} className="flex gap-4 border-1 p-1 rounded-sm">
            {setOfCards.map((card, i) => (
              <img
                width="70"
                height="auto"
                src={card.ImageSrc}
                alt="Card Image"
                key={card.id}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
