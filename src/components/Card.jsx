// Simple placeholder card
export default function Card({ imagePath }) {
  //   const imagePath = `/cards/${deckStyle}/${card.id}.svg`;

  //
  return (
    <div className="w-14 h-20 rounded-lg bg-white shadow-md border border-zinc-300 flex items-center justify-center text-sm font-bold">
      <img
        // src={`src/${image}`}
        // src={image}
        src={`${imagePath}`}
        //
        alt={"card image"}
        className="h-full w-full object-contain image-pixelated"
      />
    </div>
  );
}
