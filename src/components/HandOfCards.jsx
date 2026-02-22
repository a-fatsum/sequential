export default function HandOfCards({ imageSource }) {
  return (
    <>
      <div className="flex gap-4">
        {/* 4 Cards */}
        <div className=" flex gap-4 border-1 p-1 rounded-sm">
          <img width="70" height="auto" src={imageSource} alt="Card Image" />
          <img width="70" height="auto" src={imageSource} alt="Card Image" />
          <img width="70" height="auto" src={imageSource} alt="Card Image" />
          <img width="70" height="auto" src={imageSource} alt="Card Image" />
        </div>
        {/* 4 Cards */}
        <div className=" flex gap-4 border-1 p-1 rounded-sm">
          <img width="70" height="auto" src={imageSource} alt="Card Image" />
          <img width="70" height="auto" src={imageSource} alt="Card Image" />
          <img width="70" height="auto" src={imageSource} alt="Card Image" />
          <img width="70" height="auto" src={imageSource} alt="Card Image" />
        </div>
        {/* 3 Cards */}
        <div className=" flex gap-4 border-1 p-1 rounded-sm">
          <img width="70" height="auto" src={imageSource} alt="Card Image" />
          <img width="70" height="auto" src={imageSource} alt="Card Image" />
          <img width="70" height="auto" src={imageSource} alt="Card Image" />
        </div>
      </div>
    </>
  );
}
