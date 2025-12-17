import { useEffect, useMemo } from "react";
import Navigation from "@/components/Navigation";
import tarotCards from "@/assets/tarot-cards.jpg";

// Seeded random function for consistent star positions
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const TarotGuidance = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Generate fixed star positions
  const whiteStars = useMemo(() => 
    Array.from({ length: 60 }).map((_, i) => ({
      width: seededRandom(i) * 2 + 1,
      height: seededRandom(i) * 2 + 1,
      left: seededRandom(i + 100) * 100,
      top: seededRandom(i + 200) * 100,
      opacity: seededRandom(i + 300) * 0.8 + 0.2,
    })), []
  );

  const yellowStars = useMemo(() => 
    Array.from({ length: 20 }).map((_, i) => ({
      width: seededRandom(i + 400) * 1.5 + 0.5,
      height: seededRandom(i + 400) * 1.5 + 0.5,
      left: seededRandom(i + 500) * 100,
      top: seededRandom(i + 600) * 100,
      opacity: seededRandom(i + 700) * 0.6 + 0.4,
    })), []
  );

  return (
    <div
      className="min-h-screen w-full text-white"
      style={{
        backgroundColor: "#0A0B2E",
      }}
    >
      <Navigation />

      <main className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-20 md:pt-20 md:pb-28 relative">
        {/* Heading and copy */}
        <section className="max-w-xl">
          <p className="tracking-[0.28em] text-[11px] sm:text-xs text-[#E2C9FF]/80 uppercase mb-3">
            THIS YEAR&apos;S
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[0.06em] text-[#F4E9FF] mb-4">
            ASTROLOGY
          </h1>
          <p className="text-sm sm:text-[15px] md:text-base leading-relaxed text-[#D5CCE6] max-w-md mb-6">
            Step into a luminous year of expansion, alignment, and deeper
            self-trust. Your tarot and astrological blueprint reveal the
            portals, pauses, and possibilities that shape your path ahead.
          </p>
          <p className="text-xs sm:text-sm text-[#B8A9D9] italic">
            Crafted for seekers ready to move with the cosmos, not against it.
          </p>
        </section>

        {/* Card spread illustration */}
        <section className="mt-16 md:mt-24 relative h-[260px] sm:h-[280px] md:h-[320px]">
          {/* Soft glow behind cards */}
          <div
            className="absolute inset-x-6 sm:inset-x-10 bottom-4 sm:bottom-6 mx-auto h-40 sm:h-44 blur-3xl opacity-70"
            style={{
              background:
                "radial-gradient(circle at center, rgba(250,243,220,0.45) 0%, rgba(7,6,30,0.0) 70%)",
            }}
          />

          {/* Subtle stars */}
          <div className="absolute -top-4 right-10 flex gap-1 text-xs text-[#EBD9FF]/80 tracking-[0.3em] uppercase">
            <span>✶</span>
            <span>✶</span>
            <span>✶</span>
          </div>

          {/* Card row */}
          <div className="absolute inset-x-0 bottom-12 sm:bottom-16 md:bottom-20 flex justify-center gap-3 sm:gap-4 md:gap-6">
            {/* Card 1 */}
            <div className="relative w-[82px] sm:w-[100px] md:w-[120px] h-[150px] sm:h-[170px] md:h-[190px] -rotate-10 origin-bottom shadow-[0_18px_40px_rgba(0,0,0,0.75)] rounded-[18px] overflow-hidden">
              <div
                className="absolute inset-px rounded-[16px]"
                style={{
                  background:
                    "linear-gradient(145deg, #F6E7CF 0%, #E4D2B8 45%, #FDF5DF 100%)",
                }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-full border border-[#D4B28A] flex items-center justify-center mb-3">
                    <div className="w-6 h-6 border border-[#D4B28A] rounded-full" />
                  </div>
                  <div className="w-[60%] h-[1px] bg-[#D7BFA0]/80 mb-1" />
                  <div className="w-[36%] h-[1px] bg-[#D7BFA0]/50" />
                </div>
              </div>
            </div>

            {/* Card 2 (image) */}
            <div className="relative w-[86px] sm:w-[110px] md:w-[130px] h-[155px] sm:h-[180px] md:h-[205px] -rotate-3 origin-bottom shadow-[0_20px_46px_rgba(0,0,0,0.85)] rounded-[18px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFF3DA] via-[#E7D1B0] to-[#FDF0D5]" />
              <div className="absolute inset-[6px] rounded-[14px] overflow-hidden">
                <img
                  src={tarotCards}
                  alt="Tarot cards spread"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative w-[86px] sm:w-[110px] md:w-[130px] h-[155px] sm:h-[180px] md:h-[205px] rotate-4 origin-bottom shadow-[0_20px_46px_rgba(0,0,0,0.85)] rounded-[18px] overflow-hidden">
              <div
                className="absolute inset-px rounded-[16px] flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(150deg, #F9ECD7 0%, #E6D0BA 40%, #FDF6E3 100%)",
                }}
              >
                <div className="w-[68%] h-[68%] border border-[#D3B896] rounded-[22px] flex items-center justify-center">
                  <div className="w-[60%] h-[60%] border border-dashed border-[#D3B896]/80 rounded-full" />
                </div>
              </div>

              {/* Small hand-like accent */}
              <div className="absolute -bottom-2 right-[10%] w-10 h-10 rounded-full bg-gradient-to-tr from-[#FFE8D4] to-[#F5D1B1] opacity-90 blur-[1px]" />
            </div>

            {/* Card 4 */}
            <div className="relative hidden sm:block w-[82px] sm:w-[96px] md:w-[112px] h-[150px] sm:h-[170px] md:h-[188px] rotate-14 origin-bottom shadow-[0_16px_38px_rgba(0,0,0,0.78)] rounded-[18px] overflow-hidden">
              <div
                className="absolute inset-px rounded-[16px]"
                style={{
                  background:
                    "linear-gradient(160deg, #F7E6D0 0%, #E2C6A2 40%, #FBEFD9 100%)",
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-[55%] h-[65%] border border-[#D2B18A] rounded-[20px] flex flex-col justify-between py-3">
                    <div className="w-5 h-5 rounded-full border border-[#D2B18A] self-center" />
                    <div className="w-[70%] h-[1px] bg-[#D2B18A]/70 self-center" />
                    <div className="w-[32%] h-[1px] bg-[#D2B18A]/50 self-center" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* HOROSCOPE Section */}
      <section className="w-full pt-8 pb-16 md:pt-10 md:pb-24 relative">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 relative">
          {/* Top Corner Decorations */}
          <div className="absolute top-6 left-6 sm:top-8 sm:left-8 flex flex-col items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
            <div className="text-[#FFD700] text-lg">✶</div>
          </div>
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 flex flex-col items-end gap-3">
            <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
            <div className="text-[#FFD700] text-lg">✶</div>
          </div>

          {/* Header Section */}
          <div className="text-center pt-12 pb-8 md:pt-16 md:pb-12">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-bold uppercase tracking-[0.1em] text-[#FFD700] mb-3">
              HOROSCOPE
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#FFD700] font-sans tracking-wide">
              Lorem ipsum dolor sit amet
            </p>
          </div>

          {/* Central Graphic Section */}
          <div className="relative flex items-center justify-center py-12 md:py-16 my-8 md:my-12" style={{ minHeight: "500px" }}>
            {/* Container for circle and triangle */}
            <div className="relative w-[85vw] max-w-[600px] aspect-square">
              {/* Large Circle Outline */}
              <div className="absolute inset-0 border border-[#FFD700] rounded-full" style={{ borderWidth: "1px" }} />
              
              {/* Large Triangle Overlay - Equilateral triangle with vertices touching circle */}
              <svg 
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{ overflow: "visible" }}
              >
                <polygon
                  points="50,8 11,88 89,88"
                  fill="none"
                  stroke="#FFD700"
                  strokeWidth="0.4"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Starry Background Circle */}
              <div className="absolute inset-[2.5%] rounded-full overflow-hidden">
                <div className="w-full h-full relative rounded-full" style={{ backgroundColor: "#0A0B2E" }}>
                  {/* White Stars */}
                  {whiteStars.map((star, i) => (
                    <div
                      key={`white-${i}`}
                      className="absolute rounded-full bg-white"
                      style={{
                        width: `${star.width}px`,
                        height: `${star.height}px`,
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        opacity: star.opacity,
                      }}
                    />
                  ))}
                  {/* Yellow Stars */}
                  {yellowStars.map((star, i) => (
                    <div
                      key={`yellow-${i}`}
                      className="absolute rounded-full bg-[#FFD700]"
                      style={{
                        width: `${star.width}px`,
                        height: `${star.height}px`,
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        opacity: star.opacity,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Full Moon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[45%] aspect-square">
                <div className="w-full h-full rounded-full relative overflow-hidden" style={{
                  background: "radial-gradient(circle at 30% 30%, #FFF8E1 0%, #F5E6B3 25%, #E8D5A0 50%, #D4C190 75%, #C4B080 100%)",
                  boxShadow: "0 0 60px rgba(255, 215, 0, 0.4), inset -20px -20px 40px rgba(0, 0, 0, 0.2), inset 10px 10px 30px rgba(255, 255, 255, 0.3)",
                }}>
                  {/* Moon Craters */}
                  <div className="absolute top-[15%] left-[25%] w-[8%] h-[8%] rounded-full bg-[#C4B080]/60 blur-[2px]" />
                  <div className="absolute top-[30%] right-[20%] w-[6%] h-[6%] rounded-full bg-[#D4C190]/50 blur-[1px]" />
                  <div className="absolute bottom-[25%] left-[20%] w-[10%] h-[10%] rounded-full bg-[#C4B080]/70 blur-[2px]" />
                  <div className="absolute bottom-[35%] right-[30%] w-[7%] h-[7%] rounded-full bg-[#D4C190]/60 blur-[1px]" />
                  <div className="absolute top-[45%] left-[45%] w-[5%] h-[5%] rounded-full bg-[#C4B080]/50 blur-[1px]" />
                  <div className="absolute top-[60%] right-[15%] w-[9%] h-[9%] rounded-full bg-[#D4C190]/65 blur-[2px]" />
                  <div className="absolute bottom-[15%] right-[25%] w-[6%] h-[6%] rounded-full bg-[#C4B080]/55 blur-[1px]" />
                </div>
              </div>

              {/* Small Crescent Moon (top-right) */}
              <div className="absolute top-[5%] right-[5%] w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#FFD700]">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.57.45-3.03 1.23-4.26C7.5 9.5 9.5 11.5 12 11.5s4.5-2 6.77-3.76C19.55 8.97 20 10.43 20 12c0 4.41-3.59 8-8 8z"
                    fill="currentColor"
                    style={{ transform: "rotate(-45deg)", transformOrigin: "center" }}
                  />
                </svg>
              </div>

              {/* Small Star (bottom-left) */}
              <div className="absolute bottom-[5%] left-[5%] text-[#FFD700] text-lg sm:text-xl md:text-2xl">
                ✶
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="text-center pt-8 pb-12 md:pt-12 md:pb-16">
            <p className="text-sm sm:text-base md:text-lg text-[#FFD700] font-sans max-w-2xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet,<br />
              et mediocrem intellegat,<br />
              ea natum omnium disseret.
            </p>
          </div>

          {/* Bottom Corner Decorations - Ornate Starburst */}
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#FFD700]">
              <path
                d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
                fill="currentColor"
                opacity="0.9"
              />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
              <path
                d="M12 4L12.5 7L15.5 7.5L12.5 8L12 11L11.5 8L8.5 7.5L11.5 7L12 4Z"
                fill="currentColor"
                opacity="0.6"
              />
            </svg>
          </div>
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#FFD700]">
              <path
                d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
                fill="currentColor"
                opacity="0.9"
              />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
              <path
                d="M12 4L12.5 7L15.5 7.5L12.5 8L12 11L11.5 8L8.5 7.5L11.5 7L12 4Z"
                fill="currentColor"
                opacity="0.6"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TarotGuidance;


