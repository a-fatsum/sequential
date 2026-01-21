export default function ThreeCardsSet({ imageSource }) {
  return (
    <>
      <div className="wrapper">
        <div className=" h-24">
          <img src={imageSource} alt="Card Image" />
        </div>
        <div className=" h-24">
          <img src={imageSource} alt="Card Image" />
        </div>
        <div className=" h-24">
          <img src={imageSource} alt="Card Image" />
        </div>
      </div>
    </>
  );
}
