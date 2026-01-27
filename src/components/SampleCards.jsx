export default function SampleCards({ sampleImageSourceClassic1 }) {
  return (
    <>
      <div className="wrapper h-24 w-18">
        <img
          className="h-24 w-18 bg-red-400"
          src={sampleImageSourceClassic1}
          alt="Card Image"
        />

        <img src="public/assets/classic-2/queen_of_diamonds.svg" alt="" />

        <img src="" alt="" />
      </div>
    </>
  );
}
