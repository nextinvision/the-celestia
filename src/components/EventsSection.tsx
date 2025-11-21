import marqueeImg from "@/assets/S EXPLORE OUR EVENTS & HIGHLIGHT.png";
import soundBowl from "@/assets/image6.png";

const EventsSection = () => {
  return (
    <section id="events" className="bg-[#b48b80] min-h-[auto] md:max-h-[70vh] md:min-h-[70vh] pb-10 pt-20 md:pt-0 px-4 sm:px-6 md:px-20 overflow-hidden relative">
      {/* ===== Image-based Marquee (Top Corner) ===== */}
      <div className="absolute top-[-15px] sm:top-[-10px] md:top-[20px] left-0 w-full overflow-hidden z-30 glow-shimmer">
        <div className="relative whitespace-nowrap">
          <div className="inline-flex mt-2 sm:mt-3 will-change-transform animate-marquee">
            {/* Duplicate image for infinite scroll */}
            <img
              src={marqueeImg}
              alt="Explore Our Events & Highlight"
              className="h-[80px] sm:h-[75px] md:h-[70px] object-contain mx-3 sm:mx-4 md:mx-6"
            />
            <img
              src={marqueeImg}
              alt="Explore Our Events & Highlight"
              className="h-[80px] sm:h-[75px] md:h-[70px] object-contain mx-3 sm:mx-4 md:mx-6"
            />
            <img
              src={marqueeImg}
              alt="Explore Our Events & Highlight"
              className="h-[80px] sm:h-[75px] md:h-[70px] object-contain mx-3 sm:mx-4 md:mx-6"
            />
            <img
              src={marqueeImg}
              alt="Explore Our Events & Highlight"
              className="h-[80px] sm:h-[75px] md:h-[70px] object-contain mx-3 sm:mx-4 md:mx-6"
            />
          </div>
        </div>
      </div>

      {/* ===== Main Event Section ===== */}
      <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-6 md:gap-10 items-start mt-16 sm:mt-20 md:mt-20 relative z-10">
        {/* Event Image */}
        <div className="relative w-full -mt-8 sm:-mt-12 md:-mt-28 z-0 flex justify-center md:justify-start">
          <img
            src={soundBowl}
            alt="Sound Bowl Event"
            className="w-full max-w-[280px] sm:max-w-[350px] md:w-[400px] h-auto aspect-square md:h-[400px] lg:w-[450px] lg:h-[450px] object-cover mx-auto md:mx-0 rounded-xl shadow-lg border-shimmer p-2"
          />
        </div>

        {/* Text Content */}
        <div className="text-white mt-4 md:mt-10 text-center md:text-left">
          <h3 className="font-waterfall text-[28px] sm:text-[36px] md:text-[32px] lg:text-[2rem] font-[700] italic mb-3 font-[cursive] text-shimmer">
            Hostel Kute's First-Ever Aqua Sound Healing Event in Gandhinagar
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[0.95rem] leading-relaxed max-w-full md:max-w-[520px]">
            Dive into a world of profound healing and memorable experience. This is where you can explore the unique
            gathering we host, designed to bring inner peace and connection right to your community.
          </p>
        </div>
      </div>

      {/* ===== Inline CSS for Marquee Animation ===== */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-70%); }
        }

        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
          align-items: center;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Golden Particles */}
      <div className="golden-particle golden-particle-medium" style={{ top: "12%", left: "8%", animationDelay: "0s" }}></div>
      <div className="golden-particle golden-particle-small golden-particle-float" style={{ top: "40%", right: "12%", animationDelay: "2s" }}></div>
      <div className="golden-particle golden-particle-small golden-particle-drift" style={{ bottom: "15%", left: "5%", animationDelay: "1.5s" }}></div>
      <div className="golden-particle golden-particle-small" style={{ top: "55%", right: "8%", animationDelay: "0.8s" }}></div>
      <div className="golden-particle golden-particle-medium" style={{ top: "25%", left: "12%", animationDelay: "1.2s" }}></div>
      
      {/* Keep one star for variety */}
      <div className="golden-star golden-star-large" style={{ top: "60%", right: "6%", animationDelay: "0.5s" }}>
        <svg viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
    </section>
  );
};

export default EventsSection;
