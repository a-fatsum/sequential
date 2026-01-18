export default function CardsTable() {
  return (
    <div className="min-h-screen flex items-center justify-center w-screen bg-zinc-900">
      {/* Table wrapper */}
      <div className="relative w-[90vw] max-w-6xl aspect-[16/9] rounded-[999px] p-8 shadow-2xl">
        {/* Felt background */}
        <div
          className="absolute inset-0 rounded-[999px]"
          style={{
            background:
              "radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 40%), repeating-linear-gradient(45deg, #0f3d2e, #0f3d2e 6px, #0d3528 6px, #0d3528 12px)",
          }}
        />

        {/* Inner border (table rail) */}
        <div className="absolute inset-3 rounded-[999px] border-8 border-amber-900" />

        {/* Content sits above the background */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          {/* Player 2 (top) */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <Card key={i} />
            ))}
          </div>

          {/* Center area (future sequences / discard / draw) */}
          <div className="flex items-center justify-center">
            <div className="text-white text-xl opacity-70">
              Center Play Area
            </div>
          </div>

          {/* Player 1 (bottom) */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <Card key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple placeholder card
function Card() {
  return (
    <div className="w-14 h-20 rounded-lg bg-white shadow-md border border-zinc-300 flex items-center justify-center text-sm font-bold">
      ?
    </div>
  );
}
