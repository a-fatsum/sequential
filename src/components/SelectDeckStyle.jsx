//

export default function SelectDeckStyle({ setDeckStyle }) {
  const deckStyles = [
    "classic-1",
    "classic-2",
    "ornamental",
    "simple",
    "white",
  ];

  function handleSelect(e) {
    setDeckStyle(e.target.value);
  }
  //
  return (
    <>
      <div className="border rounded-sm p-2">
        <p>Select Deck Style</p>

        <select
          onChange={(e) => {
            handleSelect(e);
          }}
          name="select-deck-style"
          id=""
        >
          {deckStyles.map((style) => (
            <option value={style}> {`${style}`}</option>
          ))}
        </select>
      </div>
    </>
  );
}
