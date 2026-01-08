import { useEffect } from "react";
import Navigation from "@/components/layout/Navigation";
import numerologyImg from "@/assets/numerology.jpg";
import bookImg from "@/assets/numerology.jpg";
import diceImg from "@/assets/dice.png";

const Numerology = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div
      className="min-h-screen w-full text-white"
      style={{
        background: "radial-gradient(circle at top, #3B064D 0%, #0A020F 55%, #040006 100%)",
      }}
    >
      <Navigation />

      {/* Top Author Banner */}
      <section
        className="w-full pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-32 md:pb-24 relative overflow-hidden"
      >

        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative">
          {/* Author name + portrait row */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 sm:gap-10 md:gap-16">
            {/* Name + button */}
            <div className="flex flex-col items-center md:items-start mt-2 sm:mt-4 md:mt-10 w-full md:w-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.15em] sm:tracking-[0.18em] text-white font-serif uppercase text-center md:text-left leading-tight">
                Sunita
                <br />
                Ramrakhiyani
              </h1>
              <button
                className="mt-4 sm:mt-6 px-6 sm:px-8 py-2 text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase border border-[#E0C774] bg-[#E0C774] text-[#3B064D] shadow-[0_10px_25px_rgba(0,0,0,0.6)] hover:bg-[#D4B863] transition-colors"
                style={{
                  borderRadius: "999px",
                }}
              >
                MEET THE AUTHOR
              </button>
            </div>

            {/* Portrait card */}
            <div className="relative mt-6 sm:mt-8 md:mt-0">
              {/* Outer gold frame */}
              <div
                className="absolute inset-0 translate-x-4 -translate-y-4 hidden sm:block"
                style={{
                  border: "2px solid #E0C774",
                  transform: "rotate(3deg) translateX(14px) translateY(-18px)",
                }}
              />
              <div
                className="relative w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] aspect-[3/4] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.75)] sm:shadow-[0_26px_55px_rgba(0,0,0,0.85)]"
                style={{
                  transform: "rotate(-3deg)",
                  border: "3px solid #E0C774",
                  backgroundColor: "#1A031F",
                }}
              >
                <img
                  src={numerologyImg}
                  alt="Numerology author"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book + Text + Dice Section */}
      <section
        className="w-full pb-12 sm:pb-16 md:pb-20 lg:pb-28 pt-8 sm:pt-10 md:pt-16 relative"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative">
          {/* Single large dice image on left - positioned relative to section */}
          <div className="hidden md:block absolute -top-56 md:-top-64 lg:-top-72 xl:-top-80 2xl:-top-96 left-0 -translate-x-[60%] lg:-translate-x-[65%]">
            <img
              src={diceImg}
              alt="Dice"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-contain shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
              style={{
                transform: "rotate(12deg)",
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
                boxShadow: "none"
              }}
            />
          </div>

          {/* Mobile dice images */}
          <div className="flex justify-center gap-8 sm:gap-10 mb-10 sm:mb-12 md:hidden">
            <img
              src={diceImg}
              alt="Dice"
              className="w-48 h-48 sm:w-56 sm:h-56 object-contain opacity-90"
              style={{
                transform: "rotate(12deg)",
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
                boxShadow: "none"
              }}
            />
            <img
              src={diceImg}
              alt="Dice"
              className="w-48 h-48 sm:w-56 sm:h-56 object-contain opacity-90"
              style={{
                transform: "rotate(-12deg)",
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
                boxShadow: "none"
              }}
            />
          </div>

          <div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 sm:gap-10 md:gap-16 items-start">
            {/* Left: Book card */}
            <div className="relative flex justify-center md:justify-start order-2 md:order-1">
              <div className="relative w-full max-w-[230px] sm:max-w-[260px] md:w-[260px] lg:w-[290px] shadow-[0_20px_40px_rgba(0,0,0,0.8)] sm:shadow-[0_30px_60px_rgba(0,0,0,0.9)]">
                {/* Book image */}
                <div
                  className="w-full aspect-[2/3] overflow-hidden"
                  style={{
                    borderRadius: "6px",
                    border: "2px solid #E0C774",
                    background:
                      "linear-gradient(145deg, #250217 0%, #4A0727 40%, #7F0D3C 100%)",
                  }}
                >
                  <img
                    src={bookImg}
                    alt="Numerology book"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Call-to-action button */}
                <button
                  className="mt-4 w-full py-2.5 text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.18em] sm:tracking-[0.22em] uppercase bg-[#B92D5B] text-white shadow-[0_12px_24px_rgba(0,0,0,0.8)] sm:shadow-[0_16px_30px_rgba(0,0,0,0.85)] hover:bg-[#A0254F] transition-colors"
                  style={{
                    borderRadius: "999px",
                    border: "1px solid rgba(255,255,255,0.45)",
                  }}
                >
                  ADD TO STORYGRAPH
                </button>
              </div>
            </div>

            {/* Right: Text + dice */}
            <div className="relative order-1 md:order-2">

              {/* Single large dice image on right */}
              <div className="hidden md:block absolute -top-8 md:-top-10 lg:-top-12 -right-56 lg:-right-64 xl:-right-72 2xl:-right-80">
                <img
                  src={diceImg}
                  alt="Dice"
                  className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-contain shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
                  style={{
                    transform: "rotate(-12deg)",
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    boxShadow: "none"
                  }}
                />
              </div>

              {/* Heading + copy */}
              <div className="max-w-xl mx-auto md:mx-0">
                <h2 className="text-xs sm:text-sm md:text-base lg:text-lg tracking-[0.25em] sm:tracking-[0.32em] uppercase text-[#E0C774] mb-3 sm:mb-4 md:mb-6 text-center md:text-left leading-tight">
                  FATE DOES NOT CHOOSE THE WEAK. FATE CHOOSES THE READY.
                </h2>
                <p className="text-[11px] sm:text-xs md:text-sm lg:text-base leading-relaxed text-[#F2E7FF] mb-3">
                  In the realm of numerology, every number carries a secret
                  rhythm, a hidden language that reveals the soul&apos;s
                  journey. Each digit in your chart is a doorway into destiny,
                  whispering who you are, what you are here to learn, and where
                  your power truly lies.
                </p>
                <p className="text-[11px] sm:text-xs md:text-sm lg:text-base leading-relaxed text-[#E4D5FA] mb-3">
                  This is not about prediction—it is about preparation. When you
                  align with your personal numbers, you begin to see how
                  &quot;coincidence&quot; is actually cosmic choreography. The
                  right doors appear. The right people arrive. The path that
                  once felt uncertain begins to glow beneath your feet.
                </p>
                <p className="text-[11px] sm:text-xs md:text-sm lg:text-base leading-relaxed text-[#D8C7F5]">
                  Whether you are standing at the edge of a new beginning or
                  deep within a turning point, numerology offers a lantern for
                  the dark. You are not at the mercy of fate—you are in
                  conversation with it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Numerology;


