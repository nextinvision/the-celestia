import { useEffect } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import servicesPhoto1 from "@/assets/img4.jpg";
import servicesPhoto2 from "@/assets/img5.jpg";
import ContactButton from "@/components/ContactButton";

const Reiki = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: "#FDFCFA" }}>
      <Navigation isNotificationVisible={false} />

      {/* Top Section with Photos and Large Text Overlay */}
      <section className="relative w-full pt-20 md:pt-24 pb-8 md:pb-12" style={{ overflow: "visible", paddingLeft: "0", paddingRight: "0" }}>
        <div className="w-full relative">
          <div className="grid grid-cols-1 md:grid-cols-5 items-stretch relative" style={{ minHeight: "250px", gap: "0" }}>
            {/* Left Photo - Healing Session */}
            <div className="md:col-span-2 relative z-10">
              <div className="w-full h-full min-h-[250px] md:min-h-[100px] overflow-hidden">
                <img
                  src={servicesPhoto1}
                  alt="Reiki Healing Session"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Center Area - Light Background */}
            <div className="md:col-span-1 relative z-10" style={{ backgroundColor: "#FDFCFA" }}>
              <div className="w-full h-full min-h-[250px] md:min-h-[300px]"></div>
            </div>

            {/* Right Photo - Hands with Crystal */}
            <div className="md:col-span-2 relative z-10 flex items-end">
              <div className="w-full overflow-hidden" style={{ height: "650px" }}>
                <img
                  src={servicesPhoto2}
                  alt="Crystal Healing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Large Text Overlay - Positioned absolutely to overlap photos */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-6 md:px-8">
              {/* "heal with me" text - spanning from left to right with more spacing */}
              <div className="w-full mb-2 md:mb-4 relative">
                <h1
                  className="font-serif"
                  style={{
                    color: "#856654",
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    lineHeight: "1.1",
                    textShadow: "0 2px 4px rgba(253, 252, 250, 0.3)",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    paddingLeft: "0",
                    paddingRight: "0",
                    fontSize: "clamp(3.5rem, 10vw, 10rem)"
                  }}
                >
                  <span>heal</span>
                  <span>with</span>
                  <span>me</span>
                </h1>
              </div>
            </div>

            {/* "REIKI" text - positioned at bottom left, overflowing into second section */}
            <div className="absolute left-0 z-20 pointer-events-none px-6 md:px-8" style={{ bottom: "-100px" }}>
              <h2
                className="font-sans uppercase text-left"
                style={{
                  color: "#856654",
                  letterSpacing: "0.05em",
                  lineHeight: "1",
                  textShadow: "0 2px 4px rgba(253, 252, 250, 0.3)",
                  marginBottom: "0",
                  fontSize: "clamp(4rem, 12vw, 12rem)",
                  fontWeight: "300"
                }}
              >
                REIKI
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section with Text and Button */}
      <section className="relative w-full py-12 md:py-16 px-4 sm:px-6" style={{ backgroundColor: "#856654", overflow: "visible", paddingTop: "140px", paddingRight: "0" }}>
        <div className="w-full" style={{ paddingRight: "0" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start relative">
            {/* Left Column - Text Content */}
            <div className="md:col-span-2 space-y-6 md:space-y-8 pr-4 md:pr-8 pl-4 md:pl-6">
              {/* Headline */}
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif"
                style={{
                  color: "#FDFCFA",
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                  lineHeight: "1.2"
                }}
              >
                Healing Begins Where You Return to Yourself
              </h3>

              {/* Body Text */}
              <p
                className="text-sm sm:text-base md:text-lg lg:text-xl font-serif italic"
                style={{
                  color: "#FDFCFA",
                  lineHeight: "1.6",
                  maxWidth: "95%",
                  opacity: 0.9
                }}
              >
                A grounded sanctuary for women healing from trauma and spiritual seekers ready to reconnect with their energy, reclaim their peace, and rise.
              </p>

              {/* Contact Me Button */}
              <div className="pt-2 md:pt-4">
                <ContactButton serviceName="Reiki & Multi Modality Healing" variant="outline" />
              </div>
            </div>

            {/* Right Column - Small Photo (Bottom Right) */}
            <div className="md:col-span-1 relative flex justify-end" style={{ paddingRight: "0", alignSelf: "flex-end", marginTop: "auto" }}>
              <div className="w-[250px] md:w-[300px] h-[250px] md:h-[350px] overflow-hidden">
                <img
                  src={servicesPhoto2}
                  alt="Healing Connection"
                  className="w-full h-full object-cover"
                />
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

export default Reiki;

