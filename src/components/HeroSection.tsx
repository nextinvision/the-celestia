import heroPortrait from "@/assets/hero-portrait.png";
import herobg from "@/assets/image 3.png";
import bglotus from "@/assets/herobg1.png";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[35vh] md:min-h-screen flex flex-col md:flex-row items-center md:items-center pt-16 pb-2 md:pt-20 md:pb-0 overflow-x-hidden md:overflow-x-visible"
      style={{ backgroundColor: "#FFF4E1" }}
      id="home"
    >
      {/* BG IMAGE LAYER */}
      <div
        className="absolute inset-0 w-full h-[120vh]"
        style={{
          backgroundImage: `url(${bglotus})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* CONTENT CONTAINER */}
      <div className="container mx-auto px-4 sm:px-6 md:px-6 relative z-30 w-full">
        {/* Mobile Layout: Text first, then image */}
        <div className="flex flex-col md:grid md:grid-cols-2 items-start md:items-center gap-6 md:gap-0">
          {/* TEXT CONTENT */}
          <div className="space-y-3 md:pl-10 lg:pl-6 font-semibold order-1 w-full">
            <h1
              className="text-[32px] sm:text-[42px] md:text-[46px] lg:text-[60px] xl:text-[70px] font-serif font-bold leading-none text-shimmer-white"
              style={{
                lineHeight: "1.1",
                letterSpacing: "-0.5px",
              }}
            >
              <span className="md:whitespace-nowrap">Meet Sunita Ramrakhiyani</span>
            </h1>

            <p
              className="text-[24px] sm:text-[32px] md:text-[50px] lg:text-[52px] flex items-center gap-2 sm:gap-3 glow-shimmer font-waterfall"
              style={{ color: "#7A5D4C" }}
            >
              <span className="text-[18px] sm:text-[24px] md:text-[28px]">—</span>
              <span className="font-medium">The Light Behind Righttsign Tarot</span>
            </p>
          </div>
        </div>
      </div>

      {/* IMAGE - Mobile: Centered in flow, Desktop: Absolute positioned */}
      <div
        className="relative md:absolute bottom-0 md:bottom-[-150px] right-0 md:right-[132px] flex items-center md:items-end justify-center md:justify-start z-20 w-auto md:w-auto mt-4 md:mt-0 px-0 md:px-0"
      >
        <img
          src={heroPortrait}
          alt="Sunita Ramrakhiyani - Righttsign Tarot"
          className="h-[110vh] sm:h-[120vh] md:max-h-[110vh] w-auto md:w-auto scale-110 sm:scale-110 md:scale-100 object-contain mx-auto md:mx-0 md:translate-x-[16%]"
        />
      </div>

      {/* Golden Particles */}
      <div className="golden-particle golden-particle-small golden-particle-float" style={{ top: "15%", left: "10%", animationDelay: "0s" }}></div>
      <div className="golden-particle golden-particle-medium" style={{ top: "25%", right: "15%", animationDelay: "1s" }}></div>
      <div className="golden-particle golden-particle-small golden-particle-drift" style={{ bottom: "20%", left: "5%", animationDelay: "2s" }}></div>
      <div className="golden-particle golden-particle-small" style={{ top: "50%", right: "8%", animationDelay: "1.5s" }}></div>
      <div className="golden-particle golden-particle-small golden-particle-float" style={{ top: "30%", left: "20%", animationDelay: "3s" }}></div>
      <div className="golden-particle golden-particle-medium" style={{ bottom: "30%", right: "25%", animationDelay: "2.5s" }}></div>
      
      {/* Keep one star for variety */}
      <div className="golden-star golden-star-medium golden-star-float" style={{ top: "60%", right: "12%" }}>
        <svg viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
