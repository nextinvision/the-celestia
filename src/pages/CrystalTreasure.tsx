import { useEffect } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import servicesPhoto2 from "@/assets/img5.jpg"; // Using existing image as placeholder
import crystalsImage from "@/assets/crystals.jpg";
import goldenImage from "@/assets/golden.jpg";
import sapphireImage from "@/assets/sapphire.jpg";
import pinkImage from "@/assets/pink.jpg";
import fluoriteImage from "@/assets/fluorite.jpg";
import ContactButton from "@/components/ContactButton";

const CrystalTreasure = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navigation isNotificationVisible={false} />

      {/* Hero Banner Section - Full Width */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image with Blur */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${crystalsImage})`,
            filter: "blur(3px)",
            transform: "scale(1.1)",
          }}
        ></div>

        {/* Dark Overlay for better text contrast - Brown tones */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(133, 102, 84, 0.5) 0%, rgba(107, 82, 67, 0.4) 50%, rgba(74, 56, 41, 0.6) 100%)",
          }}
        ></div>

        {/* Main Content - Centered with button slightly to the right */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 z-10" style={{ transform: "translateY(-30px)" }}>
          {/* Main Headline - Centered horizontally */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white font-light text-center leading-tight mb-3 sm:mb-4 md:mb-5"
            style={{
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
              letterSpacing: "0.05em",
              fontWeight: 300,
            }}
          >
            CRYSTALS FOR RADIANT LIVING
          </h1>

          {/* Sub-headline - Directly below main headline */}
          <p
            className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 font-light text-center mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto"
            style={{
              textShadow: "0 1px 5px rgba(0, 0, 0, 0.5)",
              letterSpacing: "0.08em",
              fontWeight: 300,
            }}
          >
            Make a statement. Make a difference. Make it yours.
          </p>

          {/* Contact Me Button */}
          <div className="flex justify-center" style={{ transform: "translateX(5%)" }}>
            <ContactButton serviceName="Crystal Treasure" />
          </div>
        </div>
      </section>

      {/* BESTSELLERS Section */}
      <section
        className="relative w-full py-12 md:py-16 px-4 sm:px-6"
        style={{
          background: "linear-gradient(135deg, #FDFCFA 0%, #F5F0EB 50%, #FDFCFA 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Sparkle/Cloud Effect Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(208, 189, 172, 0.8) 1px, transparent 1px),
              radial-gradient(circle at 80% 70%, rgba(208, 189, 172, 0.6) 1px, transparent 1px),
              radial-gradient(circle at 40% 60%, rgba(208, 189, 172, 0.7) 1px, transparent 1px),
              radial-gradient(circle at 60% 20%, rgba(208, 189, 172, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "200px 200px, 150px 150px, 180px 180px, 160px 160px",
            backgroundPosition: "0 0, 50px 50px, 100px 100px, 150px 150px",
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* BESTSELLERS Title */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#856654] font-bold text-left mb-3 md:mb-4"
            style={{ letterSpacing: "0.02em" }}
          >
            BESTSELLERS
          </h2>

          {/* Subtitle */}
          <p className="text-sm md:text-base lg:text-lg text-[#856654]/80 font-sans text-left mb-8 md:mb-12">
            Our most treasured crystals for your collection!
          </p>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Product Card 1 - Golden Quartz */}
            <div className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
                <img
                  src={goldenImage}
                  alt="Golden Quartz"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold text-[#856654]">GOLDEN QUARTZ</h3>
              </div>
            </div>

            {/* Product Card 2 - Sapphire */}
            <div className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
                <img
                  src={sapphireImage}
                  alt="Sapphire"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold text-[#856654]">SAPPHIRE</h3>
              </div>
            </div>

            {/* Product Card 3 - Pink Amethyst */}
            <div className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
                <img
                  src={pinkImage}
                  alt="Pink Amethyst"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold text-[#856654]">PINK AMETHYST</h3>
              </div>
            </div>

            {/* Product Card 4 - Fluorite */}
            <div className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
                <img
                  src={fluoriteImage}
                  alt="Fluorite"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold text-[#856654]">FLUORITE</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CrystalTreasure;

