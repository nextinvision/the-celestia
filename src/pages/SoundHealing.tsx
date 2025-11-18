import { useNavigate } from "react-router-dom";
import servicesPhoto2 from "@/assets/img5.jpg"; // Using existing image as placeholder

const SoundHealing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#9A9A7A" }}>
      {/* Top Hero Section */}
      <div className="relative h-[75vh] md:h-[85vh] overflow-visible">
        {/* Background Image with Blur */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${servicesPhoto2})`,
            filter: "blur(3px)",
            transform: "scale(1.1)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Logo/Top Left */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
          <span className="text-white/95 text-xl md:text-2xl font-serif tracking-[0.2em] font-light">SOUNDS</span>
        </div>

        {/* Main Title - Centered, Shifted Upward */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4" style={{ transform: "translateY(-40px)" }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white font-light tracking-[0.05em] text-center leading-tight">
            SOUND HEALING
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-white/90 font-light mt-3 md:mt-4 tracking-[0.15em] uppercase">
            ON A CELLULAR LEVEL
          </p>
        </div>
      </div>

      {/* Middle Section with Image */}
      <div className="relative overflow-visible" style={{ backgroundColor: "#9A9A7A" }}>
        {/* Top Corner Text */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
          <span className="text-white/75 text-[10px] md:text-xs font-sans tracking-[0.1em]">EST. 2022</span>
        </div>
        <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
          <span className="text-white/75 text-[10px] md:text-xs font-sans tracking-[0.1em]">GRASS VALLEY, CA</span>
        </div>

        {/* Central Image Block - Absolutely Positioned to Overflow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full -translate-y-[200px] md:-translate-y-[250px] z-20">
          <div className="container mx-auto px-4">
            <div className="relative max-w-2xl mx-auto">
            {/* Text Overlays Above Image */}
            <div className="flex justify-between items-center mb-1 md:mb-2 px-1 md:px-2">
              <span className="text-white/65 text-[9px] md:text-xs font-sans uppercase tracking-[0.3em] font-light">ALIGNED</span>
              <span className="text-white/65 text-[9px] md:text-xs font-sans uppercase tracking-[0.3em] font-light">TRANSFORM</span>
            </div>

            {/* Main Image */}
            <div className="relative flex justify-center">
              <img
                src={servicesPhoto2}
                alt="Sound Healing Session"
                className="object-contain"
                style={{ borderRadius: "2px", maxWidth: "95%", maxHeight: "450px" }}
              />
            </div>

            {/* Text Overlays Below Image */}
            <div className="flex justify-between items-center mt-1 md:mt-2 px-1 md:px-2">
              <span className="text-white/65 text-[9px] md:text-xs font-sans uppercase tracking-[0.3em] font-light">HEAL</span>
              <div className="flex items-center gap-1 md:gap-2">
                <div className="h-[0.5px] w-6 md:w-8 bg-white/40"></div>
                <span className="text-white/65 text-[9px] md:text-xs font-sans uppercase tracking-[0.3em] font-light">MANIFEST</span>
                <div className="h-[0.5px] w-6 md:w-8 bg-white/40"></div>
              </div>
              <span className="text-white/65 text-[9px] md:text-xs font-sans uppercase tracking-[0.3em] font-light">RENEW</span>
            </div>
            </div>
          </div>
        </div>
        
        {/* Spacer for image overflow */}
        <div className="pt-[200px] md:pt-[250px] pb-4 md:pb-6"></div>
      </div>

      {/* Bottom Section - About */}
      <div className="relative py-8 md:py-12" style={{ backgroundColor: "#9A9A7A" }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Left Side - Heading */}
            <div className="pt-4 md:pt-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-white/95 font-light leading-[1.2] tracking-tight">
                Embark On<br />
                A Journey<br />
                Of Healing &<br />
                Harmony
              </h2>
            </div>

            {/* Right Side - Description */}
            <div className="space-y-5 md:space-y-6 text-white/80 font-sans text-sm md:text-base lg:text-lg leading-relaxed pt-4 md:pt-0">
              <p>
                My passion is to guide you on a transformative journey, where every note and vibration brings you closer to harmony and balance. I am Violet, your dedicated sound healer, specializing in creating a sacred space for deep healing and inner peace.
              </p>
              <p>
                Sound healing is an ancient art, combining intuitive wisdom with the transformative power of sound waves. As a practitioner, I continuously explore and integrate new techniques and insights, ensuring that every encounter with Soul Sounds is both grounding and enlightening.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="relative" style={{ backgroundColor: "#6B6B5A" }}>
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <a
              href="#"
              className="inline-block text-white text-sm md:text-base font-sans uppercase tracking-widest hover:text-white/80 transition-colors"
            >
              CONTACT ME
            </a>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-4 right-4 z-50 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md backdrop-blur-sm transition-colors"
      >
        ← Back
      </button>
    </div>
  );
};

export default SoundHealing;

