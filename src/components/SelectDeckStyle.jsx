//

export default function SelectDeckStyle({ setDeckStyle }) {
  const deckStyles = [
    "classic-1",
    "classic-2",
    "classic-x",
    "classic-xx",
    "classic-xxx",
  ];

  function handleSelect(e) {
    setDeckStyle(e.target.value);
  }
  //
  return (
    <>
      <div className="bg-blue-500">
        <h1>TEST 🍁</h1>

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
