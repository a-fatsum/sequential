import SelectDeckStyle from "./SelectDeckStyle";
import Card from "./Card";
import ThreeCardsSet from "./ThreeCardsSet";
import SampleCards from "./SampleCards";
// //
const CardsTable = ({
  setDeckStyle,
  selectedDeck,
  imagePath,
  sampleImageSourceClassic1,
  imageSrc,
}) => {
  const children = true;
  return (
    <div className=" flex items-center justify-center h-full">
      {/* Ground shadow (table weight) */}
      <div className="relative">
        <div
          className="
            absolute inset-0
            rounded-[2.75rem]
            blur-3xl
            bg-black/70
            translate-y-8
            -z-10
          "
        />

        {/* Wood rail */}
        <div
          className="
            relative
            w-[95vw]
            max-w-[1700px]
            h-[75vh]
            rounded-[2.75rem]
            bg-gradient-to-br
            from-[#4a2f1c]
            via-[#6a4427]
            to-[#2a170d]
            shadow-[0_22px_45px_rgba(0,0,0,0.6)]
            p-[14px]
          "
        >
          {/* Subtle rail highlight */}
          <div
            className="
              absolute inset-0
              rounded-[2.75rem]
              ring-1 ring-white/10
              pointer-events-none
            "
          />

          {/* Felt surface */}
          <div
            className="
              relative
              w-full h-full
              rounded-[2.25rem]
              bg-gradient-to-br
              from-green-700
              via-green-800
              to-green-900
              shadow-[inset_0_6px_14px_rgba(0,0,0,0.35)]
              overflow-hidden
            "
          >
            {/* Felt texture */}
            <div
              className="
                absolute inset-0
                opacity-[0.14]
                bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)]
                [background-size:6px_6px]
              "
            />

            {/* Edge vignette */}
            <div
              className="
                absolute inset-0
                rounded-[2.25rem]
                shadow-[inset_0_0_110px_rgba(0,0,0,0.45)]
                pointer-events-none
              "
            />

            {/* Content layer <---------------------------------------------------------------------- */}
            <div className="relative w-full h-full flex items-center justify-center">
              <SelectDeckStyle setDeckStyle={setDeckStyle} />
              <SampleCards imageSrc={imageSrc} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsTable;
